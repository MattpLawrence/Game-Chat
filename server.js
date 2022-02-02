const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
//require in models folder in order to generate the tables using sequelize
const models = require("./models");

const app = express();

const PORT = process.envPORT || 3001;

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

//make sure sequelize is connected before starting the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(` \nServer listening on port: ${PORT}`);
  });
});
