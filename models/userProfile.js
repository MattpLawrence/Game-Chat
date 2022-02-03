//require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");

class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pass_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_display: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    time_start: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    time_end: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tblUserProfile",
  }
);

module.exports = UserProfile;
