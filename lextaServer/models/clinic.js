'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      Clinic.hasMany(models.User, {
        foreignKey: 'clinicId',
        sourceKey: 'id',
        onDelete: 'CASCADE',
      });
    }
  }
  Clinic.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    propinsi: DataTypes.STRING,
    kota: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    type: DataTypes.STRING,
    variant: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    logo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};
