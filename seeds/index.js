// seed the database with initial/ test data

//connect to sequelize
const sequelize = require("../../Game-Chat/config/connection");
//require tables
const {
  UserProfile,
  UserGames,
  GamesList,
} = require("../../Game-Chat/models/index");

//require in .json seed files

const seedUserProfile = require("./seedUserProfile.json");
const seedUserGames = require("./seedUserGames.json");
const seedGamesList = require("./seedGamesList.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await UserProfile.bulkCreate(seedUserProfile);
  await UserGames.bulkCreate(seedUserGames);
  await GamesList.bulkCreate(seedGamesList);

  process.exit(0);
};

seedDatabase();
