// routes/authRouter.js
const express = require('express');
const { register, login, checkDoubleLogin } = require('../controllers/authController');
const router = express.Router();
const verifyToken = require('../midelwares/verfyToken');
const loginLimitMiddleware = require('../midelwares/radis/loginLimitMiddleware')

router.post('/register', register);
router.post('/login',loginLimitMiddleware, login);

router.get('/checkDoubleLogin', verifyToken, checkDoubleLogin);

module.exports = router;
