//require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");

class UserGames extends Model {}

UserGames.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tblUserProfile",
        key: "id",
      },
    },
    namePlatform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // DataTypes.ARRAY(DataTypes.STRING) not available for MySQL, need to save as STRING then split / join in JS
    nameGame: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tblUserGames",
  }
);

module.exports = UserGames;
