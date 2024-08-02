'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cabangs', [
      {
        id: uuidv4(),
        name: 'Cabang 1',
        address: 'Address 1',
        provinsi: 'provinsi 1',
        kota: 'Kota 1',
        kecamatan: 'Kecamatan 1',
        officePhoneNumber: '08123456789',
        logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fmoslemtravel.id%2F&psig=AOvVaw1eODHYkvMTT_zW-yLOHORQ&ust=1722240447815000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCpqOijyYcDFQAAAAAdAAAAABAR',
        travelId: '1be2b21c-8a4a-48cd-a9e5-4ea58db246b8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Cabang 2',
        address: 'Address 2',
        provinsi: 'provinsi 2',
        kota: 'Kota 2',
        kecamatan: 'Kecamatan 2',
        officePhoneNumber: '08123456780',
        logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Farab-kaaba-hajj-umrah-tour-travel-logo-icon-vector-46994155&psig=AOvVaw1eODHYkvMTT_zW-yLOHORQ&ust=1722240447815000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCpqOijyYcDFQAAAAAdAAAAABAE',
        travelId: '61ae9701-0702-4d14-b7d8-d452a03d8bcb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cabangs', null, {});
  },
};
