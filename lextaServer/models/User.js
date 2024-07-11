'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Clinic, {
        foreignKey: 'clinicId',
        targetKey: 'id',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    clinicId: {
      type: DataTypes.UUID,
    },
    token: {
      type: DataTypes.TEXT, // Mengubah tipe kolom token menjadi TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user, options) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    }
  });
  return User;
};

