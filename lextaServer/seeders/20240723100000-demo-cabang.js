'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cabangs', [
      {
        id: uuidv4(),
        name: 'Cabang 1',
        address: 'Address 1',
        propinsi: 'Propinsi 1',
        kota: 'Kota 1',
        kecamatan: 'Kecamatan 1',
        officePhoneNumber: '08123456789',
        logo: 'logo1.png',
        travelId: '16743a59-af87-4d78-90a1-f3c3f81392bb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Cabang 2',
        address: 'Address 2',
        propinsi: 'Propinsi 2',
        kota: 'Kota 2',
        kecamatan: 'Kecamatan 2',
        officePhoneNumber: '08123456780',
        logo: 'logo2.png',
        travelId: '16743a59-af87-4d78-90a1-f3c3f81392bb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cabangs', null, {});
  },
};
