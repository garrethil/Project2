// Importing required models
const Listing = require("./Listing");
const City = require("./City");
const BuildingType = require("./BuildingType");
const ListingType = require("./ListingType");
const User = require("./User");

// Defining associations
Listing.belongsTo(City, {
  foreignKey: "location_id",
});

Listing.belongsTo(BuildingType, {
  foreignKey: "building_type",
});

Listing.belongsTo(ListingType, {
  foreignKey: "listing_type",
});

City.hasMany(Listing, {
  foreignKey: "location_id",
});

BuildingType.hasMany(Listing, {
  foreignKey: "building_type",
});

ListingType.hasMany(Listing, {
  foreignKey: "listing_type",
});

Listing.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Listing, {
  foreignKey: "user_id",
});

Listing.belongsTo(City, {
  foreignKey: "location_id",
});

City.hasMany(Listing, {
  foreignKey: "location_id",
});

module.exports = { Listing, City, BuildingType, ListingType, User };
