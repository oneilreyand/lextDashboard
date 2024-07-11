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
        clinicId: '7bc58418-b5e8-49ef-98da-0bf79b606dae', // Clinic ID 1
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
        clinicId: '31ee355b-f6c7-4380-b004-d00805e46ce6', // Clinic ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
