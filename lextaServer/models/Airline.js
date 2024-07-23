'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    static associate(models) {
      Airline.hasMany(models.Product, { as: 'departureAirline', foreignKey: 'departureAirlineId' });
      Airline.hasMany(models.Product, { as: 'returnAirline', foreignKey: 'returnAirlineId' });
    }
  }

  Airline.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Airline',
  });

  return Airline;
};
