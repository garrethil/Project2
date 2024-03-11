const router = require("express").Router();
const { User, Listing, City, BuildingType, ListingType } = require("../models");

// GET method for homepage route to render hompage views
router.get("/", async (req, res) => {
 try { res.render("homepage", {
    logged_in: req.session.logged_in,
  });


    // Render homepage with login status
    res.render("homepage", { logged_in: req.session.logged_in });
 } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/").reload();
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
      res.redirect("/").reload();
      return;
    }
  }  catch (err) {
      res.status(500).json(err);
    }
})

// GET method for logout route
router.get("/logout", async (req, res) => {
  try {
    res.redirect("/").reload();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



//get all cities to select a city of choice when making a listing or browsing listings

router.get("/cities", async (req, res) => {
    try {
        const cityNames = await City.findAll()  
    
        const cityName = cityNames.map((type) => type.get({ plain: true }));
        res.render("locationspage", { cityName })
           
        res.status(200).json(cityData);
    } 
        catch (err) {
            res.status(500).json(err);
    }
});

// get all building types

router.get("/buildingTypes", async (req, res) => {
    try {
        const buildingTypeData = await BuildingType.findAll()   
    
        const buildingTypes = buildingTypeData.map((type) => type.get({ plain: true }));
        res.render("buildingtypepage", { buildingTypes })

        res.status(200).json(buildingTypeData);
    } 
        catch (err) {
            res.status(500).json(err);
    }
});



// get all listing types

router.get("/listingTypes", async (req, res) => {
    try {
        const listingTypeData = await ListingType.findAll()   
    
        const listingTypes = listingTypeData.map((type) => type.get({ plain: true }));
        res.render("listingtypepage", { listingTypes })
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

        const listings = listingData.map((listing) => listing.get({ plain: true }));


        res.render("listingspage", { listings })
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

      const listingInfo = listingData.map((listing) => listing.get({ plain: true }));
  
      res.render("listing", { listingInfo } )
  
      res.status(200).json(listingData);
    } catch (err) {
      res.status(500).json(err);
      
    }
  });

  





module.exports = router;