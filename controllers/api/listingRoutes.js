const router = require("express").Router();
const { User, Listing, City, BuildingType, ListingType } = require("../../models");
const withAuth = require("../../utils");

// delete Listing by ID
router.delete("/listings/:id", withAuth, async (req, res) => {
  try {
    const listingData = await Listing.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!listingData) {
      res.status(404).json({ message: "No listing found with this id!" });
      return;
    }

    res.status(200).json(listingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// new listing
router.post("/listings", withAuth, async (req, res) => {
  try {
    const { address_name, description, price, user_id, building_type, listing_type } = req.body;

    const newListing = await Listing.create({
      address_name,
      description,
      price,
      user_id,
      building_type,
      listing_type
    });

    res.status(200).json(newListing);
  } catch (err) {
    res.status(400).json(err);
  }
});








module.exports = router;