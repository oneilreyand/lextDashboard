'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RolePermissions', [
      {
        id: uuidv4(),
        roleId: '181be8a7-727b-40cd-b405-71b4d348a8c8', // Doctor role
        permissionId: 'b0e7ffd7-73d9-477c-b910-199fbf9f7a77', // View Patients
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        roleId: '181be8a7-727b-40cd-b405-71b4d348a8c8', // Doctor role
        permissionId: '87ad540c-4c78-4228-986c-5ed42be6ee68', // Edit Patients
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        roleId: '6ef3dfa4-b426-4a33-8eeb-08fac1c6b8cd', // Nurse role
        permissionId: 'b0e7ffd7-73d9-477c-b910-199fbf9f7a77', // View Patients
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more role-permission mappings as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RolePermissions', null, {});
  }
};
