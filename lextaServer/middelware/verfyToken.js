const jwt = require('jsonwebtoken');
const { User } = require('../models');

const verifyToken = async (token) => {
  try {
    const cleanToken = token ? token.replace('Bearer ', '') : '';

    if (!cleanToken) {
      return { valid: false, message: 'No token provided.' };
    }

    // Verify token
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

    // Find user and check if token matches
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      return { valid: false, message: 'User not found.' };
    }

    // Check for double login
    if (user.token !== cleanToken) {
      return { valid: false, message: 'This token is no longer valid. User has logged in from another device.' };
    }

    // Check if token is expired
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      // Token is expired, refresh it
      const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      await user.update({ token: newToken });

      return { valid: true, newToken, user };
    }

    return { valid: true, user };
  } catch (error) {
    return { valid: false, message: 'Token is invalid or expired.' };
  }
};
module.exports = verifyToken;
