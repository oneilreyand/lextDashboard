// services/roleService.js
const { Role } = require('../../models');

class RoleService {
  static async createRole(name, description) {
    try {
      const role = await Role.create({ name, description });
      return role;
    } catch (error) {
      throw new Error(`Error creating role: ${error.message}`);
    }
  }

  static async getAllRoles() {
    try {
      const roles = await Role.findAll();
      return roles;
    } catch (error) {
      throw new Error(`Error fetching roles: ${error.message}`);
    }
  }
}

module.exports = RoleService;
