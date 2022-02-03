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
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tblUserProfile",
        key: "id",
      },
    },
    name_platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // DataTypes.ARRAY(DataTypes.STRING) not available for MySQL, need to save as STRING then split / join in JS
    name_game: {
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
