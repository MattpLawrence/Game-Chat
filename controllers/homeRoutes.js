const router = require("express").Router();
const { GamesList, UserGames, UserProfile } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // // Get all projects and JOIN with user data
    // const projectData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("landingPage", {
      // projects,
      // logged_in: req.session.logged_in
    });
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
