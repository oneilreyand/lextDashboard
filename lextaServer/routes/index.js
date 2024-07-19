// routes/index.js
const express = require('express');
const authRouter = require('./authRouter');
const clinicRouter = require('./clinicRouter');
const userRouter = require('./userRouter');

const router = express.Router();


router.use('/auth', authRouter);
router.use('/clinic', clinicRouter);
router.use('/users', userRouter);

module.exports = router;
