'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoles', [
      {
        id: uuidv4(),// Optionally you can add ID here, otherwise it will auto-generate
        userId: 'b01c00ee-1c06-43cd-859d-2561927317d1', // ID of Admin1
        roleId: '6ef3dfa4-b426-4a33-8eeb-08fac1c6b8cd', // Doctor role ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),// Optionally you can add ID here, otherwise it will auto-generate
        userId: 'd36386e0-af8e-4c8e-bec8-24801eec6a39', // ID of Admin2
        roleId: '181be8a7-727b-40cd-b405-71b4d348a8c8', // Nurse role ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more user-role mappings as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
