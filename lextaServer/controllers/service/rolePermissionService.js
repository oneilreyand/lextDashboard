// services/rolePermissionService.js
const { RolePermission } = require('../../models');

class RolePermissionService {
  static async assignRolePermission(roleId, permissionId) {
    try {
      const rolePermission = await RolePermission.create({ roleId, permissionId });
      return rolePermission;
    } catch (error) {
      throw new Error(`Error assigning role permission: ${error.message}`);
    }
  }
}

module.exports = RolePermissionService;
