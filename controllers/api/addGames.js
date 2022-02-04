const router = require("express").Router();
const { UserGames } = require("../../models");

// add user's platform add all games to database
router.post("/addGames", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
