const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const Pusher = require("pusher");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});

//require in models folder in order to generate the tables using sequelize
const models = require("./models");
const routes = require("./controllers");
const sequelize = require("./config/connection");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

// Session middleware
app.use(
  session({
    secret: "somesuperdupersecret",
    resave: true,
    saveUninitialized: true,
  })
);

// set handlebars as default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// ***********************pusher**************************
// Create an instance of Pusher
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/join-chat", (req, res) => {
  // store username in session
  req.session.username = req.body.username;
  res.json("Joined");
});

app.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  // Retrieve username from session and use as presence channel user_id
  const presenceData = {
    user_id: req.session.username,
  };
  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

app.post("/send-message", (req, res) => {
  pusher.trigger("presence-groupChat", "message_sent", {
    username: req.body.username,
    message: req.body.message,
  });
  res.send("Message sent");
});

// // **************************End pusher***************************

//make sure sequelize is connected before starting the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(` \nServer listening on port: ${PORT}`);
  });
});
