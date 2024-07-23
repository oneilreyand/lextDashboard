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
        travelId: '16743a59-af87-4d78-90a1-f3c3f81392bb', // Set the travelId if applicable
        cabangId: '7132d70a-2c52-4451-a8dd-6b27469cbaea', // Set the cabangId if applicable
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
        travelId: '16743a59-af87-4d78-90a1-f3c3f81392bb', // Set the travelId if applicable
        cabangId: '9879df42-44d7-400d-a47e-f31ad73ef048', // Set the cabangId if applicable
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
