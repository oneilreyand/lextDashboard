'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      {
        id: uuidv4(),
        name: 'View Patients',
        code: 'a1',
        description: 'Permission to view patients',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Edit Patients',
        code: 'a2',
        description: 'Permission to edit patients',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more permissions as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
