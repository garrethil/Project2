const router = require("express").Router();
const sequelize = require("../config/connection");

// get method for homepage views, login, signup + logout
router.get("/", async (req, res) => {});

router.get("/login", async (req, res) => {});

router.get("/signup", async (req, res) => {});

router.get("/logout", async (req, res) => {});

module.exports = router;
