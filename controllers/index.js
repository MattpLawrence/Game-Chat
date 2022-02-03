const router = require("express").Router();
const { GamesList, UserGames, UserProfile } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dataUserProfile = await UserProfile.findAll();
    console.log("got");
    return res.status(200).json(dataUserProfile);
  } catch (err) {
    console.log("error");
    return res.status(500).json(err);
  }
});

module.exports = router;
