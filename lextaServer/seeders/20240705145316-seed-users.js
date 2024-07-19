'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10); // Hashed password for '123'

    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        name: 'Admin1',
        email: 'admin1@gmail.com',
        password: hashedPassword,
        phoneNumber: '1234567890',
        role: 'owner',
        avatar: 'https://example.com/avatar1.png',
        clinicId: '52dc9484-1a53-4e6e-91b5-a2f881da47d2', // Clinic ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Admin2',
        email: 'admin2@gmail.com',
        password: hashedPassword,
        phoneNumber: '0987654321',
        role: 'owner',
        avatar: 'https://example.com/avatar2.png',
        clinicId: '7fba3d9b-1335-4658-9ad7-4e6ee8a68370', // Clinic ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
