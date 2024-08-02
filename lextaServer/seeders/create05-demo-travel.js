'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Travels', [{
      id: uuidv4(),
      name: 'Travel Agency A',
      variant: 'Standard',
      phoneNumber: '1234567890',
      address: '123 Main St',
      provinsi: 'Province A',
      kota: 'City A',
      kecamatan: 'District A',
      email: 'info@travelagencyC.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv4(),
      name: 'Travel Agency B',
      variant: 'Premium',
      phoneNumber: '0987654321',
      address: '456 Second St',
      provinsi: 'Province B',
      kota: 'City B',
      kecamatan: 'District B',
      email: 'contact@travelagencyD.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Travels', null, {});
  },
};
