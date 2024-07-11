const express = require('express');
const router = express.Router();
const {
    getAllClinics,
    getClinicById,
    createClinic,
    updateClinic,
    deleteClinic
} = require('../controllers/clinicControler'); // Sesuaikan dengan path kontroler Anda
const verifyToken = require('../midelwares/verfyToken');


// Routes
router.get('/',verifyToken, getAllClinics);
router.get('/:id',verifyToken, getClinicById);
router.post('/',verifyToken, createClinic);
router.put('/:id',verifyToken, updateClinic);
router.delete('/:id',verifyToken, deleteClinic);

module.exports = router;
