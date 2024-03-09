const router = require("express").Router();
const { User } = require("../models");

// GET method for homepage route to render hompage views
router.get("/", async (req, res) => {
  try {
    console.log(req.session.logged_in);

    // Render homepage with login status
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/").reload();
      return;
    }

    res.render("login");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/").reload();
      return;
    }

    res.render("signup");
  } catch (err) {
    console.error(err);
  }
});

// GET method for logout route
router.get("/logout", async (req, res) => {
  try {
    res.redirect("/").reload();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
