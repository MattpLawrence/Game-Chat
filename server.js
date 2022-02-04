const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});
//require in models folder in order to generate the tables using sequelize
const models = require("./models");
const routes = require("./controllers");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//make sure sequelize is connected before starting the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(` \nServer listening on port: ${PORT}`);
  });
});
