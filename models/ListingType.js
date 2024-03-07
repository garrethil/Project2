const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ListingType extends Model {}

ListingType.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    listing_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'listingType',
  }
);

module.exports = ListingType;