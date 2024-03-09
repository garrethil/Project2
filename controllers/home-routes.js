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
        const cityData = await City.findAll()   
    
        res.status(200).json(cityData);
    } 
        catch (err) {
            res.status(500).json(err);
    }
});

// get all building types

get.router("/buildingTypes", async (req, res) => {
    try {
        const buildingTypeData = await BuildingType.findAll()   
    
        res.status(200).json(buildingTypeData);
    } 
        catch (err) {
            res.status(500).json(err);
    }
});



// get all listing types

get.router("/listingTypes", async (req, res) => {
    try {
        const listingTypeData = await ListingType.findAll()   
    
        res.status(200).json(listingTypeData);
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
        res.status(200).json(listingData);
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
  
      res.status(200).json(listingData);
    } catch (err) {
      res.status(500).json(err);
      
    }
  });

  





module.exports = router;
