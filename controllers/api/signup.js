const router = require("express").Router();
const { UserProfile } = require("../../models");

var initProfile = "";

//take nameUser, passUser, nameDisplay, from body and add to initProfile
router.post("/signupProfile", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

// reference api routes on loginPage.js to log in after creating account
