const router = require("express").Router();
const { withAuth, hasAuth } = require("../utils/auth");
const { GamesList, UserGames, UserProfile } = require("../models");
const path = require("path");
const { Session } = require("express-session");

//display initial homepage
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

//display initial chat
router.get("/chat", withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;
    console.log(user_id);
    const userData = await UserProfile.findOne({
      where: { id: user_id },
      raw: true,
    });
    console.log("userData: " + userData);

    res.render("chat", { userData, chat_on: "yes", logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});
//display initial signup page
router.get("/signUpProfile", async (req, res) => {
  try {
    res.render("signUpProfile", { signUpProfile: "yes" });
  } catch (err) {
    res.status(500).json(err);
  }
});
//display initial login page
router.get("/loginPage", async (req, res) => {
  try {
    res.render("loginPage", { loginPage: "yes" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
