// controllers/rolePermissionController.js
const RolePermissionService = require('./rolePermissionService');

async function assignRolePermission(req, res) {
  try {
    const { roleId, permissionId } = req.body;
    const rolePermission = await RolePermissionService.assignRolePermission(roleId, permissionId);
    res.status(200).json(rolePermission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  assignRolePermission,
};
