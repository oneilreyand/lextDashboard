const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key'; // Replace with your actual secret key

class AuthService {
  static async register(data) {
    try {
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(data.password, 10);
      
      // Create a new user
      const user = await User.create({
        ...data,
        password: hashedPassword,
      });

      return user;
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

  static async login(email, password) {
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }

      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      // Generate JWT token
      const token = jwt.sign({ id: user.id, travelId: user.travelId }, SECRET_KEY, { expiresIn: '1h' });
      
      // Save token to the database
      await user.update({ token });

      return { user, token };
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  }

  static async authenticateToken(token) {
    try {
      // Verify JWT token
      const decoded = jwt.verify(token, SECRET_KEY);
      const user = await User.findOne({ where: { id: decoded.id, token } });
      if (!user) {
        throw new Error('User not found or token mismatch');
      }
      return user;
    } catch (error) {
      throw new Error(`Invalid token: ${error.message}`);
    }
  }
}

module.exports = AuthService;
