const express = require('express');
const TravelController = require('../controllers/trevelController');
const router = express.Router();

router.post('/', TravelController.createTravel);
router.get('/', TravelController.getAllTravels);
router.get('/:id', TravelController.getTravelById);
router.put('/:id', TravelController.updateTravel);
router.delete('/:id', TravelController.deleteTravel);

module.exports = router;