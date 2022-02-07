const router = require("express").Router();
const res = require("express/lib/response");
const { UserProfile } = require("../../models");

//take info from body, save to dbGameChat

router.post("/signupProfile", async (req, res) => {
  console.log(req.body);
  try {
    // console.log(req.params);
    const userProfileData = await UserProfile.create(req.body);
    req.session.save(() => {
      req.session.user_id = userProfileData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in);
      res.status(200).json(`${userProfileData.name_display} has logged in.`);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/signupProfile", async (req, res) => {
  try {
    const userProfileData = await UserProfile.findAll();
    res.status(200).json(userProfileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// reference api routes on loginPage.js to log in after creating account

module.exports = router;
