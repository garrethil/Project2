const router = require("express").Router();
const { User, Listing, City, BuildingType, ListingType } = require("../../models");

// get all Listings

router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
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

// delete Listing by ID




module.exports = router;