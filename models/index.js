//index.js file in the models folder is the pathway in where you set up the relationships between your tables

const UserProfile = require("./userProfile");
const UserGames = require("./userGames");
const ListGames = require("./listGames");

//set up relationships
UserProfile.hasMany(UserGames, {
  foreignKey: "idUser",
  onDelete: "CASCADE",
});
//include what UserGames belongs to
UserGames.belongsTo(UserProfile, {
  foreignKey: "idUser",
});

module.exports = { UserProfile, UserGames, ListGames };
