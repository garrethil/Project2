const router = require("express").Router();
const { User, Post, Comment } = require("../../models"); // depends on models we'll have

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

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
  try {
    const dbUserData = await User.findOne({
      where: {username: req.body.username}
    });
    if (!dbUserData) {
      res.status(400).json({ message:`User id ${req.params.id} is not valid.`});
      return;
    } 
    // create session, and send response back
    })
  }
});

router.post("/logout", async (req, res) => {});

module.exports = router;
