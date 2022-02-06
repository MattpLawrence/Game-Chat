const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});
const http = require("http");
const socketio = require("socket.io");

//require in models folder in order to generate the tables using sequelize
const models = require("./models");
const routes = require("./controllers");
const sequelize = require("./config/connection");
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// set handlebars as default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

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

// ************************************Socket.io**************************************

//make sure sequelize is connected before starting the server.

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(` \nServer listening on port: ${PORT}`);
//   });
// });
