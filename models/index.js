// // Importing required models
// const listing = require('./Listing');
// const City = require('./City');
// const ListingType = require('./BuildingType');
// const BuildingType = require('./BuildingType');

const sequelize = require('../config/connection');
const Listing = require('./Listing');
const City = require('./City');
const BuildingType = require('./BuildingType');
const ListingType = require('./ListingType');

// Defining associations
Listing.belongsTo(City, { 
    foreignKey: 'location_id', 
});

Listing.belongsTo(BuildingType, { 
    foreignKey: 'building_type', 
});

Listing.belongsTo(ListingType, { 
    foreignKey: 'listing_type', 
});

City.hasMany(Listing, { 
    foreignKey: 'location_id', 
});

BuildingType.hasMany(Listing, { 
    foreignKey: 'building_type', 
});

ListingType.hasMany(Listing, { 
    foreignKey: 'listing_type', 
});

module.exports = { Listing, City, BuildingType, ListingType};

 

