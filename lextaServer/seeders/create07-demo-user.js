'use strict';
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10); // Example hashed password

    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'admin1@travel.com',
        password: hashedPassword,
        phoneNumber: '1234567890',
        name: 'John Doe',
        avatar: 'https://example.com/avatar1.png',
        userInfo: JSON.stringify({ age:23 }),
        travelId: '1be2b21c-8a4a-48cd-a9e5-4ea58db246b8', // Set the travelId if applicable
        cabangId: '30df04be-ecf3-4646-8284-247da1a2db59', // Set the cabangId if applicable
        token: null,
        refreshToken: null,
        isAgent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'example2@travel.com',
        password: hashedPassword,
        phoneNumber: '0987654321',
        name: 'Jane Smith',
        avatar: 'https://example.com/avatar2.png',
        userInfo: JSON.stringify({ age: 30 }),
        travelId: '61ae9701-0702-4d14-b7d8-d452a03d8bcb', // Set the travelId if applicable
        cabangId: '8b5dc997-2cbd-4f4e-9fd5-b9b0db323067', // Set the cabangId if applicable
        token: null,
        refreshToken: null,
        isAgent: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
