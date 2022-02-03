// seed the database with initial/ test data

//connect to sequelize
const sequelize = require("../config/connection");
//require tables
const { UserProfile, UserGames, GamesList } = require("../models/index");

//require in .json seed files

const seedUserProfile = require("./seedUserProfile.json");
// const seedUserGames = require("./seedUserGames.json");
const seedGamesList = require("./seedGamesList.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userProfile = await UserProfile.bulkCreate(seedUserProfile);
  // await UserGames.bulkCreate(seedUserGames);
  const gamesList = await GamesList.bulkCreate(seedGamesList);

  process.exit(0);
};

seedDatabase();
