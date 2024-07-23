const express = require('express');
const router = express.Router();
const cabangController = require('../controllers/cabangController');
const authMiddleware = require ('../midelwares/authMidelware');


// CRUD operations for Cabang
router.post('/', cabangController.create);
router.get('/', cabangController.getAll);
router.get('/:id', authMiddleware, cabangController.getById);
router.put('/:id', cabangController.update);
router.delete('/:id', cabangController.delete);

module.exports = router;
