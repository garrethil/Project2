const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Listing, City, BuildingType, ListingType } = require("../models");

// get method for homepage views, login, signup + logout
router.get("/", async (req, res) => {});

router.get("/login", async (req, res) => {});

router.get("/signup", async (req, res) => {});

router.get("/logout", async (req, res) => {});



//get all cities to select a city of choice when making a listing or browsing listings

get.router("/cities", async (req, res) => {
    try {
        const cityNames = await ListingType.findAll()   
    
        const cityName = cityNames.map((type) => type.get({ plain: true }));
        res.render("locationspage", { cityName })
    } 
        catch (err) {
            res.status(500).json(err);
    }
});

// get all building types

get.router("/buildingTypes", async (req, res) => {
    try {
        const buildingTypeData = await ListingType.findAll()   
    
        const buildingTypes = buildingTypeData.map((type) => type.get({ plain: true }));
        res.render("buildingtypepage", { buildingTypes })
    } 
        catch (err) {
            res.status(500).json(err);
    }
});



// get all listing types

get.router("/listingTypes", async (req, res) => {
    try {
        const listingTypeData = await ListingType.findAll()   
    
        const listingTypes = listingTypeData.map((type) => type.get({ plain: true }));
        res.render("listingtypepage", { listingTypes })
    } 
        catch (err) {
            res.status(500).json(err);
    }
});

// get all Listings

router.get("/listings", async (req, res) => {
    try {
        const listingData = await Listing.findAll({
            include: [{ model: City, ListingType, BuildingType, User }]
        });

        const listings = listingData.map((listing) => listing.get({ plain: true }));


        res.render("listingspage", { listings })
    } catch (err) {
        res.status(500).json(err);
    }
})

// get listing by id
router.get("/listings/:id", async (req, res) => {
    try {
      const listingData = await Listing.findByPk(req.params.id, {
        include: [{ model: City, ListingType, BuildingType, User }]
      });
  
      if (!listingData) {
        res.status(404).json({ message: "No listing found with that id!"})
        return;
      }

      const listingInfo = listingData.map((listing) => listing.get({ plain: true }));
  
      res.render("listing", { listingInfo } )
    } catch (err) {
      res.status(500).json(err);
      
    }
  });

  





module.exports = router;
