//index.js file in the models folder is the pathway in where you set up the relationships between your tables

const UserProfile = require("./userProfile");
const UserGames = require("./userGames");
const GamesList = require("./gamesList");

//set up relationships
UserProfile.hasMany(UserGames, {
  foreignKey: "id_user",
  onDelete: "CASCADE",
});
//include what UserGames belongs to
UserGames.belongsTo(UserProfile, {
  foreignKey: "id_user",
});

module.exports = { UserProfile, UserGames, GamesList };
