const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: Location, 
        key: 'id'       
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'city',
  }
);

module.exports = City;