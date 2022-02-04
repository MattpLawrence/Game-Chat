const router = require("express").Router();
const { UserGames } = require("../../models");

// add user's platform add all games to database
router.post("/test", async (req, res) => {
  try {
    const addedGame = await UserGames.create(req.body);
    res.status(200).json(addedGame);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
