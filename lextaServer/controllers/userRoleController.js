// controllers/userRoleController.js
const UserRoleService = require('./userRoleService');

async function assignUserRole(req, res) {
  try {
    const { userId, roleId } = req.body;
    const userRole = await UserRoleService.assignUserRole(userId, roleId);
    res.status(200).json(userRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  assignUserRole,
};
