const router = require("express").Router();
const Pusher = require("pusher");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

// *******************Pusher**********************

// Session middleware
router.use(
  session({
    secret: "somesuperdupersecret",
    resave: true,
    saveUninitialized: true,
  })
);
// Body parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Create an instance of Pusher
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

// router.get("/", (req, res) => {
//   res.sendFile("index.html");
// });
// chat home route
router.get("/chat", async (req, res) => {
  try {
    res.render("chat");
  } catch (err) {
    console.log("nope");
    res.status(500).json(err);
  }
});

router.post("/join-chat", (req, res) => {
  // store username in session
  req.session.username = req.body.username;
  res.json("Joined");
});

router.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  // Retrieve username from session and use as presence channel user_id
  const presenceData = {
    user_id: req.session.username,
  };
  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

router.post("/send-message", (req, res) => {
  pusher.trigger("presence-groupChat", "message_sent", {
    username: req.body.username,
    message: req.body.message,
  });
  res.send("Message sent");
});

module.exports = router;
