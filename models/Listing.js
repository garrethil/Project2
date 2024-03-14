const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Listing extends Model {}

Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    address_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    imageUrl: {
      type: DataTypes.STRING, // store url of jpeg file
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "city",
        key: "id",
      },
    },
    building_type: {
      type: DataTypes.INTEGER,
      references: {
        model: "buildingType",
        key: "id",
      },
    },
    listing_type: {
      type: DataTypes.INTEGER,
      references: {
        model: "listingType",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "listing",
  },
);

module.exports = Listing;
