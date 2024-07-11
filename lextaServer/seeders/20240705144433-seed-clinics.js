'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clinics', [
      {
        id: uuidv4(),
        name: 'Clinic A',
        address: '123 Main St',
        propinsi: 'Propinsi A',
        kota: 'Kota A',
        kelurahan: 'Kelurahan A',
        type: 'General',
        variant: 'Standard',
        phoneNumber: '123456789',
        logo: 'https://example.com/logo-a.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Clinic B',
        address: '456 Elm St',
        propinsi: 'Propinsi B',
        kota: 'Kota B',
        kelurahan: 'Kelurahan B',
        type: 'Specialist',
        variant: 'Premium',
        phoneNumber: '987654321',
        logo: 'https://example.com/logo-b.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more clinics as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clinics', null, {});
  },
};
