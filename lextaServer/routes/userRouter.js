const express = require('express');
const router = express.Router();
const verifyToken = require('../midelwares/verfyToken');
const UserController = require('../controllers/userControler');

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
