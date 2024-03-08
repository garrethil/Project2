const {BuildingType} = require('../models');

const buildingTypeData = [
    {
        building_type: 'House',
    },
    {
        building_type: 'Appartment',
    },
    {
        building_type: 'Cottage',
    },
    {
        building_type: 'TownHouse',
    },
    {
        building_type: 'Bungalow',
    },
    {
        building_type: 'Condo',
    },
    {
        building_type: 'Retail Space',
    },
];

const seedBuildingType = async () => BuildingType.bulkCreate(buildingTypeData);

module.exports = seedBuildingType;