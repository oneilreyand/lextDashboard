// services/permissionService.js
const { Permission } = require('../../models');

class PermissionService {
  static async createPermission(name, description) {
    try {
      const permission = await Permission.create({ name, description });
      return permission;
    } catch (error) {
      throw new Error(`Error creating permission: ${error.message}`);
    }
  }

  static async getAllPermissions() {
    try {
      const permissions = await Permission.findAll();
      return permissions;
    } catch (error) {
      throw new Error(`Error fetching permissions: ${error.message}`);
    }
  }
}

module.exports = PermissionService;
