const router = require("express").Router();
const sequelize = require("../config/connection");

// get method for homepage views, login, signup + logout
router.get("/", async (req, res) => {});

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

router.get("/logout", async (req, res) => {});

module.exports = router;
