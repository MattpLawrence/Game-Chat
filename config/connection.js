// This file is designed to set up sequelize so that we connect or MySql2 database to the server.

const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    //use credentials from the.env file in the root directory
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    //required information for running sequelize from their documentation
    {
      host: "localhost",
      dialect: "mysql",
      port: "3306",
    }
  );
}

module.exports = sequelize;
