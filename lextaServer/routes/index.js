// routes/index.js
const express = require('express');
const router = express.Router();

const travelRouter = require('./travelRouter');
const cabangRouter = require('./cabangRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const wilayaIndonesia = require('./wilayahIndonesiaRouter')

router.use('/auth', authRouter);
router.use('/travel', travelRouter);
router.use('/cabang', cabangRouter);
router.use('/user', userRouter);
router.use('/wilayahIndonesia', wilayaIndonesia);

module.exports = router;
