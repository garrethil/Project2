const router = require("express").Router();
const { User, Listing, City, BuildingType, ListingType } = require("../../models");

//get all cities to select a city of choice when making a listing or browsing listings

get.router("/", async (req, res) => {
    try {
        const buildingTypeData = await BuildingType.findAll()   
    
        res.status(200).json(buildingTypeData);
    } 
        catch (err) {
            res.status(500).json(err);
    }
})

module.exports = router;