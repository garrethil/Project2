const router = require("express").Router();
const { User } = require("../../models"); // depends on models we'll have

// Endpoint for handling POST requests to create a new user
router.post("/", async (req, res) => {
  try {
    // Creating a new user using the data from the request body
    const userData = await User.create(req.body);

    // Saving user session data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user_name = userData.user_name;

      // Sending response with user data and success message
      res.json({ user: userData, message: "You have signed in!" });
    });

    // Logging user data to console for debugging purposes
    console.log(userData);
  } catch (err) {
    // Handling errors if user creation fails
    console.error(err);
    res.status(500).json({ message: "Failed to create the user!" }, err);
  }
});

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

router.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(400).end();
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "You're now logged out. Bye!" });
  }
});

module.exports = router;
