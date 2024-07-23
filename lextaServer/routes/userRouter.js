const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD operations for User
router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
