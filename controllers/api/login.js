const router = require("express").Router();
const { UserProfile } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userProfileData = await UserProfile.findOne({
      where: { name_user: req.body.name_user },
    });
    let password = userProfileData.pass_user;
    if (!userProfileData) {
      res
        .status(200)
        .json({ message: "Incorrect email or password, please try again" });
    } else if (req.body.pass_user !== password) {
      res
        .status(200)
        .json({ message: "Incorrect email or password, please try again" });
    } else {
      console.log(userProfileData);
      // set up session on login success
      console.log(req.session);
      req.session.save(() => {
        req.session.user_id = userProfileData.id;
        req.session.logged_in = true;
        console.log(req.session.logged_in);
        res.status(200).json(`${userProfileData.name_display} has logged in.`);
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
//logout, remove session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
