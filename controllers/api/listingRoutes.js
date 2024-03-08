const router = require("express").Router();
const { User, Listing, City, BuildingType, ListingType } = require("../../models");
const withAuth = require("../../utils");

// delete Listing by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const listingData = await Listing.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!listingData) {
      res.status(404).json({ message: 'No listing found with this id!' });
      return;
    }

    res.status(200).json(listingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// new listing
router.post('/', withAuth, async (req, res) => {
  try {
    const newListings = await Listing.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});






module.exports = router;