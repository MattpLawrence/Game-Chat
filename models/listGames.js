//require Model and DataTypes from Sequelize package
const { Model, DataTypes, ARRAY } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");

class ListGames extends Model {}

ListGames.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    namePlatform: {
      // DataTypes.ARRAY(DataTypes.STRING) not availible for MySQL, need to save as STRING then split / join in JS
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameGame: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tblListGames",
  }
);

module.exports = ListGames;
