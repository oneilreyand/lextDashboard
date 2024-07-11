const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {

  // Metode untuk registrasi pengguna baru
  static async register(req, res) {
    try {
      const { email, password, phoneNumber } = req.body;

      // Memeriksa apakah pengguna sudah ada
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Meng-hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Membuat pengguna baru
      const user = await User.create({
        email,
        password: hashedPassword,
        phoneNumber
      });

      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }

  // Metode untuk login pengguna
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Memeriksa apakah pengguna ada
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Memeriksa kecocokan password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Menghasilkan JWT
      const token = jwt.sign({ id: user.id, role: user.role, clinicId: user.clinicId }, process.env.JWT_SECRET, { expiresIn: '12h' });

      // Menyimpan token ke model pengguna
      user.token = token;
      await user.save();

      // Mengirim token kembali ke klien
      res.status(200).json({ 
        message: 'Success login',
        token: token });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }

  // Metode untuk memeriksa login ganda
  static async checkDoubleLogin(req, res) {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findOne({ where: { id: decoded.id, token } });

      if (!user) {
        throw new Error();
      }

      res.status(200).send({ message: 'Token is valid and user is logged in.' });
    } catch (error) {
      res.status(401).send({ error: 'Invalid token or user is logged out.' });
    }
  }
}

module.exports = UserController;
