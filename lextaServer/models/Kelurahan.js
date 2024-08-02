'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kelurahan = sequelize.define('Kelurahan', {
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kecamatanId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Kecamatans',
        key: 'id'
      }
    }
  }, {});
  Kelurahan.associate = function(models) {
    Kelurahan.belongsTo(models.Kecamatan, {
      foreignKey: 'kecamatanId',
      as: 'kecamatan'
    });
  };
  return Kelurahan;
};
