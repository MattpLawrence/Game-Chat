const router = require("express").Router();
const res = require("express/lib/response");
const { UserProfile } = require("../../models");

var initProfile = "";

//take nameUser, passUser, nameDisplay, from body and add to initProfile
router.post("/signupProfile", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

//take birthday info and add to initProfile
router.post("/signupBirthday", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

//take timeStart, and timeEnd from body and add to initProfile then create new UserProfile
router.post("/signupHours", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

// reference api routes on loginPage.js to log in after creating account

module.exports = router;
