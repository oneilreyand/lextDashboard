'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kecamatan = sequelize.define('Kecamatan', {
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kabupatenId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Kabupatens',
        key: 'id'
      }
    }
  }, {});
  Kecamatan.associate = function(models) {
    Kecamatan.belongsTo(models.Kabupaten, {
      foreignKey: 'kabupatenId',
      as: 'kabupaten'
    });
    Kecamatan.hasMany(models.Kelurahan, {
      foreignKey: 'kecamatanId',
      as: 'kelurahans'
    });
  };
  return Kecamatan;
};
