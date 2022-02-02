//require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");

class UserProfile extends Model {}

UserProfile.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nameUser: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  passUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameDisplay: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ageUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  timeStart: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: true,
  },
  timeEnd: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: true,
  },
});
