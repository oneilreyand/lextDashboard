'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Clinic, { foreignKey: 'clinicId', onDelete: 'CASCADE' });
      User.belongsToMany(models.Role, { through: 'UserRoles', as: 'roles', foreignKey: 'userId' });
      User.belongsToMany(models.Permission, { through: 'UserPermissions', foreignKey: 'userId' });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    userInfo: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    clinicId: {
      type: DataTypes.UUID,
    },
    token: {
      type: DataTypes.TEXT,
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
      },
    },
  });
  return User;
};
