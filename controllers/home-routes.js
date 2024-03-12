const router = require("express").Router();
// const sequelize = require("../config/connection");
const { User, Listing, City, BuildingType, ListingType } = require("../models");

// GET method for homepage route to render hompage views
router.get("/", async (req, res) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });

=======
>>>>>>> 8a3e80d (Fixed many bugs with naming and some http request)
    const listingData = await Listing.findAll({
      include: [
        {
          model: City,
          attributes: ["city_name"],
        },
        {
          model: BuildingType,
          attributes: ["building_type"],
        },
        {
          model: ListingType,
          attributes: ["listing_type"],
        },
      ],
    });

    // Sterlize the data
    const listings = listingData.map((listing) => listing.get({ plain: true }));

    console.log(listings);

>>>>>>> de91bd9 (Passing the data onto the views)
    // Render homepage with login status
    res.render("homepage", { listings, logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
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
      res.redirect("/");
      return;
    }
    res.render("signup", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET method for logout route
router.get("/logout", async (req, res) => {
  try {
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get all cities to select a city of choice when making a listing or browsing listings

router.get("/cities", async (req, res) => {
  try {
    const cityNames = await City.findAll();

    const cityName = cityNames.map((type) => type.get({ plain: true }));
    res.render("locationspage", { cityName });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get all building types
router.get("/buildingTypes", async (req, res) => {
  try {
    const buildingTypeData = await BuildingType.findAll();

    const buildingTypes = buildingTypeData.map((type) =>
      type.get({ plain: true }),
    );
    res.render("buildingtypepage", { buildingTypes });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get all listing types

router.get("/listingTypes", async (req, res) => {
  try {
    const listingTypeData = await ListingType.findAll();

    const listingTypes = listingTypeData.map((type) =>
      type.get({ plain: true }),
    );
    res.render("listingtypepage", { listingTypes });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get all Listings

router.get("/listings", async (req, res) => {
  try {
    const listingData = await Listing.findAll({
      include: [{ model: City, ListingType, BuildingType, User }],
    });

    const listings = listingData.map((listing) => listing.get({ plain: true }));

    res.render("listingspage", { listings });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get listing by id
router.get("/listings/:id", async (req, res) => {
  try {
    const listingData = await Listing.findByPk(req.params.id, {
      include: [{ model: City, ListingType, BuildingType, User }],
    });

    if (!listingData) {
      res.status(404).json({ message: "No listing found with that id!" });
      return;
    }

    const listingInfo = listingData.map((listing) =>
      listing.get({ plain: true }),
    );

    res.render("listing", { listingInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
