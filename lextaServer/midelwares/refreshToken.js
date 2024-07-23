const jwt = require('jsonwebtoken');
const { User } = require('../models');

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token provided.' });
    }

    // Find user by refresh token
    const user = await User.findOne({ where: { refreshToken } });
    if (!user) {
      throw new Error('Invalid refresh token.');
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    if (decoded.id !== user.id) {
      throw new Error('Invalid refresh token.');
    }

    // Generate new tokens
    const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const newRefreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    // Update user with new tokens
    await user.update({ token: newToken, refreshToken: newRefreshToken });

    res.json({ token: newToken, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { refreshToken };
