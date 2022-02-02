const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");

const app = express();

const PORT = process.envPORT || 3001;

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
// set root of static assets tot he 'public' folder
app.use(express.static(path.join(__dirname, "public")));

//make sure sequelize is connected before starting the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
