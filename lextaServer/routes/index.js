// routes/index.js
const express = require('express');
const authRouter = require('./authRouter');
const clinicRouter = require('./clinicRouter');

const router = express.Router();


router.use('/auth', authRouter);
router.use('/clinic', clinicRouter);

module.exports = router;
