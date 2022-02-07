const router = require("express").Router();
const addGames = require("./addGames");
const chat = require("./chat");
const signup = require("./signup");
const login = require("./login");

router.use("/addGames", addGames);
router.use("/chat", chat);
router.use("/signup", signup);
router.use("/login", login);

module.exports = router;
