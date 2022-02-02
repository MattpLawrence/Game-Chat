const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  //use credentials from the.env file in the root directory
  process.env.dbName,
  process.env.dbUser,
  process.env.dbPassword,
  //required information for running sequelize from their documentation
  {
    host: "localhost",
    dialect: "mysql",
    port: "3306",
  }
);

module.exports = sequelize;
