'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      // Define associations here if necessary
    }
  }

  RolePermission.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    roleId: {
      type: DataTypes.UUID,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    permissionId: {
      type: DataTypes.UUID,
      references: {
        model: 'Permissions',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'RolePermission',
  });

  return RolePermission;
};
