'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kabupaten = sequelize.define('Kabupaten', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provinsiId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Provinsi',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {});

  Kabupaten.associate = function(models) {
    Kabupaten.belongsTo(models.Provinsi, {
      foreignKey: 'provinsiId',
      as: 'provinsi'
    });
  };

  return Kabupaten;
};
