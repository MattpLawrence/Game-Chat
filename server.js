const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});
const http = require("http");
const socketio = require("socket.io");
const session = require("express-session");
const bodyParser = require("body-parser");

//require in models folder in order to generate the tables using sequelize
const models = require("./models");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// app.use(.json());

// app.use(express.urlencoded({ extended: true }));
// set root of static assets to the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// set handlebars as default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// **************************************Session*********************************

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// ************************************Socket.io**************************************
const botName = "Gamer Gabble Bot";

// run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    //emit object to be grabbed with socket.on() in main.js to be viewable only the one connecting
    socket.emit("message", formatMessage(botName, "Welcome to Gamer Gabble"));

    // Broadcast when user connects to everyone but user in the room
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // SEND USER AND ROOM INFO
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // listen for ChatMessage to be submitted
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    // submit the message to everyone
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Run when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      // broadcast to everyone
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );
      // send user room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

// ************************************Server listen**********************************

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

//keep clear for now....

// make sure sequelize is connected before starting the server.
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(` \nServer listening on port: ${PORT}`);
//   });
// });
