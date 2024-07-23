const AuthService = require('./services/authService');

// Register a new user
exports.register = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Log in a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await AuthService.login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Middleware to authenticate token
exports.authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const user = await AuthService.authenticateToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
