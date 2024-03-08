const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedListing = require('./listingData');
const seedCity = require('./cityData');
const seedListingType = require('./listingTypeData');
const seedBuildingType = require('./buildingTypeData');

const seedAll = async() => {
    try {
        await sequelize.sync({force: true});

        await seedUser();
        await seedListing();
        await seedCity();
        await seedListingType();
        await seedBuildingType();

        console.log('Seed data added successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedAll();