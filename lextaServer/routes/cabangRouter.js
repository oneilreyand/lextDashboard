const express = require('express');
const router = express.Router();
const cabangController = require('../controllers/cabangController');
// CRUD operations for Cabang
router.post('/', cabangController.create);
router.get('/', cabangController.getAll);
router.get('/:id', cabangController.getById);
router.put('/:id', cabangController.update);
router.delete('/:id', cabangController.delete);

module.exports = router;
