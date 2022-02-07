// to come
const router = require("express").Router();
const { UserProfile } = require("../../models");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await UserProfile.findOne({
      where: { name_user: req.body.username },
    });
    console.log(userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.pass_user);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userProfileData = await UserProfile.findOne({
      where: { name_user: req.body.name_user },
    });
    if (!userProfileData) {
      res
        .status(200)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const validPassword = await userProfileData.checkPassword(
      req.body.pass_user
    );

    console.log(userProfileData);
    res.status(200).json(userProfileData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
