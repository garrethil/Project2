const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const listingRoutes = require("./listingRoutes");
// const cityRoutes = require("./cityRoutes");
// const buildingTypeRoutes = require("./buildingTypeRoutes");
// const listTypeRoutes = require("./listingTypeRoutes");

router.use("/users", userRoutes);
// router.use("/listings", listingRoutes);
// router.use("/city", cityRoutes);
// router.use("/buidlingType", buildingTypeRoutes);
// router.use("/listingType", listTypeRoutes);

module.exports = router;
