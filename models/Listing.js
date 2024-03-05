const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

Listing.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        adresss_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        location_id: {
            type: DataTypes.INTEGER
        },
        building_type: {
            type: DataTypes.INTEGER
        },
        Listing_type: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'listing',
    }
);

module.exports = Listing;