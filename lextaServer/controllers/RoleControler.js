// controllers/roleController.js
const RoleService = require('../services/roleService');

async function createRole(req, res) {
  try {
    const { name, description } = req.body;
    const role = await RoleService.createRole(name, description);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllRoles(req, res) {
  try {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRole,
  getAllRoles,
};
