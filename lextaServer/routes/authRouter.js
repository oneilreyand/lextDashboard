// routes/authRouter.js
const express = require('express');
const { register, login, checkDoubleLogin } = require('../controllers/authController');
const router = express.Router();
const verifyToken = require('../midelwares/verfyToken');
const rateLimitMiddleware = require('../midelwares/radis/rateLimitMiddleware')

router.post('/register', register);
router.post('/login',rateLimitMiddleware, login);

router.get('/checkDoubleLogin', verifyToken, checkDoubleLogin);

module.exports = router;
