const router = require("express").Router();
const addGames = require("./addGames");
const chat = require("./chat");
const signup = require("./signup");

router.use("/addGames", addGames);
router.use("/chat", chat);
router.use("/signup", signup);

module.exports = router;
