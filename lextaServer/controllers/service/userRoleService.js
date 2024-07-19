// services/userRoleService.js
const { UserRole } = require('../../models');

class UserRoleService {
  static async assignUserRole(userId, roleId) {
    try {
      const userRole = await UserRole.create({ userId, roleId });
      return userRole;
    } catch (error) {
      throw new Error(`Error assigning user role: ${error.message}`);
    }
  }
}

module.exports = UserRoleService;
