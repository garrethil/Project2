const {ListingType} = require('../models');

const listingTypeData = [
    {
        listing_type: 'For Sale'
    },
    {
        listing_type: 'For Rent'
    },
    {
        listing_type: 'Commercial'
    },
];

const seedListingType = async () => ListingType.bulkCreate(listingTypeData);

module.exports = seedListingType;