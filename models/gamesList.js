//require Model and DataTypes from Sequelize package
const { Model, DataTypes, ARRAY } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");

class GamesList extends Model {}

GamesList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_platform: {
      // DataTypes.ARRAY(DataTypes.STRING) not available for MySQL, need to save as STRING then split / join in JS
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_game: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tblGamesList",
  }
);

module.exports = GamesList;
