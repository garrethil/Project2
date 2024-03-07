const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BuildingType extends Model {}

BuildingType.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    building_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'buildingType',
  }
);

module.exports = BuildingType;