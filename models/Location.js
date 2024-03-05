const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL,
    allowNull: true //Not sure if T/F
  },
  longitude: {
    type: DataTypes.DECIMAL,
    allowNull: true //Not sure if T/F
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true //Not sure if T/F
  },
}, 
{
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'location',
});

module.exports = Location;