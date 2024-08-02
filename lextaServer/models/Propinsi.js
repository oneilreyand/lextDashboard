'use strict';
module.exports = (sequelize, DataTypes) => {
  const Provinsi = sequelize.define('Provinsi', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Provinsi.associate = function(models) {
    // Define association to Kabupaten
    Provinsi.hasMany(models.Kabupaten, {
      foreignKey: 'provinsiId',
      as: 'kabupatens'
    });
  };
  return Provinsi;
};
