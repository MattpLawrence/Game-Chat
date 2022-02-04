const router = require("express").Router();
const addGamesRoutes = require("./games.js");

router.use("/add", addGamesRoutes);

module.exports = router;
