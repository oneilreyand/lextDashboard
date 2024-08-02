const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.header('Authorization');
    const cleanToken = token ? token.replace('Bearer ', '') : '';
    
    if (!cleanToken) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    // Verify token
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);
    
    // Find user and check if token matches
    const user = await User.findOne({ where: { id: decoded.id, token: cleanToken } });
    if (!user) {
      throw new Error();
    }

    // Check if token is expired
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      // Token is expired, refresh it
      const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      await user.update({ token: newToken });

      // Respond with new token
      res.setHeader('x-new-token', newToken);
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

module.exports = authMiddleware;
