const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const Pusher = require("pusher");

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//make sure sequelize is connected before starting the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(` \nServer listening on port: ${PORT}`);
  });
});
