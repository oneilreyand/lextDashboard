'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    static associate(models) {
      // A Travel can have many Cabang
      Travel.hasMany(models.Cabang, { foreignKey: 'travelId', onDelete: 'CASCADE' });
      // A Travel can have many Users
      Travel.hasMany(models.User, { foreignKey: 'travelId', onDelete: 'CASCADE' });
      Travel.hasMany(models.Product, { foreignKey: 'travelId', onDelete: 'CASCADE' });
    }
  }

  Travel.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    variant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    propinsi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Travel',
  });

  return Travel;
};
