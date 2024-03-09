// imports express router pkg + define routes for the app
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
