const router = require("express").Router();
const { append } = require("express/lib/response");
const { GamesList, UserGames, UserProfile } = require("../models");


// router.get("/test", async (req, res) => {
//   try {
//     // const dataUserProfile = await UserProfile.findAll();
//     // const dataUserGames = await UserGames.findAll();
//     const dataGamesList = await GamesList.findAll();
//     console.log("got it");
//     return res.status(200).json(dataGamesList);
//   } catch (err) {
//     console.log("error");
//     return res.status(500).json(err);
//   }
// });


router.get('/test', async(req, res) => {
  try{
    const dataGamesList = await GamesList.findAll();
    res.status(200).json(dataGamesList);
  } catch(err) {
    res.status(500).json(err);

  }
});

 

module.exports = router;


