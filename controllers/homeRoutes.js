const router = require("express").Router();
const { GamesList, UserGames, UserProfile } = require("../models");
const withAuth = require("../utils/auth");

// initial test route
// router.get("/", async (req, res) => {
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
// });

router.get("/", async (req, res) => {
  try {
    res.render("landingPage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

//get and display the add games page, make sure to include query to show the user's already added games once a platform has been selected.
router.get("/addGames:id", async (req, res) => {
  try {
    res.render("addGames", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// chat home route
router.get("/chat", async (req, res) => {
  try {
    res.render("chat");
  } catch (err) {
    console.log("nope");
    res.status(500).json(err);
  }
});

module.exports = router;
