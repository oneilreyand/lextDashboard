// controllers/permissionController.js
const PermissionService = require('./service/permissionService');

async function createPermission(req, res) {
  try {
    const { name, description } = req.body;
    const permission = await PermissionService.createPermission(name, description);
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllPermissions(req, res) {
  try {
    const permissions = await PermissionService.getAllPermissions();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPermission,
  getAllPermissions,
};
