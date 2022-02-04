const router = require("express").Router();
const { GamesList, UserGames, UserProfile } = require("../models");
const apiRoutes = require("./api");
// //router.get("/", async (req, res) => {
//   try {
//     // const dataUserProfile = await UserProfile.findAll();
//     // const dataUserGames = await UserGames.findAll();
//     const dataGamesList = await GamesList.findAll();
//     console.log("got it");
//     return res.status(200).json(dataGamesList);
//   } catch (err) {
//     console.log("error");
//     return res.status(500).json(err);
//   }
//});
router.use("/api", apiRoutes);
module.exports = router;
