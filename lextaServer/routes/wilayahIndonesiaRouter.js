const express = require('express');
const router = express.Router();
const provinsiController = require('../controllers/provinsiControler');
const kabupatenController = require('../controllers/kabupatenControler');
const kecamatanController = require('../controllers/kecamatanKontroller');
const kelurahanController = require('../controllers/kelurahanController');

router.get('/provinsi', provinsiController.getAll);
router.get('/provinsi/:id', provinsiController.getById);

router.get('/kabupaten', kabupatenController.getAll);
router.get('/kabupaten/:id', kabupatenController.getById);
router.get('/kabupatenProvinsiId/:id', kabupatenController.getByProvinsiId);

router.get('/kecamatan', kecamatanController.getAll);
router.get('/kecamatan/:id', kecamatanController.getById);
router.get('/kecamatanKabupatenId/:id', kecamatanController.getByKabupatenId)

router.get('/kelurahan', kelurahanController.getAll);
router.get('/kelurahan/:id', kelurahanController.getById);

module.exports = router;
