const router = require("express").Router();
const { GamesList, UserGames, UserProfile } = require("../models");

// set usl path prefixes
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
