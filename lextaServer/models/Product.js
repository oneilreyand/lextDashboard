'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Travel, { foreignKey: 'travelId', onDelete: 'CASCADE' });
      Product.belongsTo(models.Hotel, { as: 'hotelMakkah', foreignKey: 'hotelMakkahId' });
      Product.belongsTo(models.Hotel, { as: 'hotelMadinah', foreignKey: 'hotelMadinahId' });
      Product.belongsTo(models.Airline, { as: 'departureAirline', foreignKey: 'departureAirlineId' });
      Product.belongsTo(models.Airport, { as: 'departureAirport', foreignKey: 'departureAirportId' });
      Product.belongsTo(models.Airline, { as: 'returnAirline', foreignKey: 'returnAirlineId' });
      Product.belongsTo(models.Airport, { as: 'returnAirport', foreignKey: 'returnAirportId' });
      Product.belongsTo(models.Bus, { foreignKey: 'busId' });
    }
  }

  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    travelId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Travels',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
    hotelMakkahId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    hotelMadinahId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    departureAirlineId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    departureAirportId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isTransitDeparture: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    transitAirportDeparture: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    isPlaneChangeDeparture: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    planeChangeAirlineDeparture: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    returnAirlineId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    returnAirportId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isTransitReturn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    transitAirportReturn: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    isPlaneChangeReturn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    planeChangeAirlineReturn: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    busId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
