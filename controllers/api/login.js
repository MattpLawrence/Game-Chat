const router = require("express").Router();
const { UserProfile } = require("../../models");

router.post("/", async (req, res) => {
  console.log(req.body);
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

      res.status(200).json(`${userProfileData.name_display} has logged in.`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
