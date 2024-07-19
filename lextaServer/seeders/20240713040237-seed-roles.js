'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        id: uuidv4(),
        name: 'Doctor',
        description: 'Medical doctor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Nurse',
        description: 'Nursing staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more roles as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
