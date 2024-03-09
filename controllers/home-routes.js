const router = require("express").Router();
const sequelize = require("../config/connection");

// GET method for homepage route and render hompage views
router.get("/", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  try {
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
