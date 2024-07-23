'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      Hotel.hasMany(models.Product, { as: 'hotelMakkah', foreignKey: 'hotelMakkahId' });
      Hotel.hasMany(models.Product, { as: 'hotelMadinah', foreignKey: 'hotelMadinahId' });
    }
  }

  Hotel.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    roomImages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    facilities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Hotel',
  });

  return Hotel;
};
