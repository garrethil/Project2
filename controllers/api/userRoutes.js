const router = require("express").Router();
const { User, Post, Comment } = require("../../models"); // depends on models we'll have

router.post("/", async (req, res) => {});

router.post("/login", async (req, res) => {});

router.post("/logout", async (req, res) => {});

module.exports = router;
