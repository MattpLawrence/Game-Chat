const router = require("express").Router();
const res = require("express/lib/response");
const { UserProfile } = require("../../models");

//take info from body, save to dbGameChat
router.post("/signupProfile", async (req, res) => {
  try {
    res.status(200).send({
      message: 'working'
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// reference api routes on loginPage.js to log in after creating account

module.exports = router;
