'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Provinsis', [
      { id: 11, kode: '11', nama: 'ACEH', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, kode: '12', nama: 'SUMATERA UTARA', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, kode: '13', nama: 'SUMATERA BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, kode: '14', nama: 'RIAU', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, kode: '15', nama: 'JAMBI', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, kode: '16', nama: 'SUMATERA SELATAN', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, kode: '17', nama: 'BENGKULU', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, kode: '18', nama: 'LAMPUNG', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, kode: '19', nama: 'KEPULAUAN BANGKA BELITUNG', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, kode: '21', nama: 'KEPULAUAN RIAU', createdAt: new Date(), updatedAt: new Date() },
      { id: 31, kode: '31', nama: 'DKI JAKARTA', createdAt: new Date(), updatedAt: new Date() },
      { id: 32, kode: '32', nama: 'JAWA BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 33, kode: '33', nama: 'JAWA TENGAH', createdAt: new Date(), updatedAt: new Date() },
      { id: 34, kode: '34', nama: 'DAERAH ISTIMEWA YOGYAKARTA', createdAt: new Date(), updatedAt: new Date() },
      { id: 35, kode: '35', nama: 'JAWA TIMUR', createdAt: new Date(), updatedAt: new Date() },
      { id: 36, kode: '36', nama: 'BANTEN', createdAt: new Date(), updatedAt: new Date() },
      { id: 51, kode: '51', nama: 'BALI', createdAt: new Date(), updatedAt: new Date() },
      { id: 52, kode: '52', nama: 'NUSA TENGGARA BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 53, kode: '53', nama: 'NUSA TENGGARA TIMUR', createdAt: new Date(), updatedAt: new Date() },
      { id: 61, kode: '61', nama: 'KALIMANTAN BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 62, kode: '62', nama: 'KALIMANTAN TENGAH', createdAt: new Date(), updatedAt: new Date() },
      { id: 63, kode: '63', nama: 'KALIMANTAN SELATAN', createdAt: new Date(), updatedAt: new Date() },
      { id: 64, kode: '64', nama: 'KALIMANTAN TIMUR', createdAt: new Date(), updatedAt: new Date() },
      { id: 65, kode: '65', nama: 'KALIMANTAN UTARA', createdAt: new Date(), updatedAt: new Date() },
      { id: 71, kode: '71', nama: 'SULAWESI UTARA', createdAt: new Date(), updatedAt: new Date() },
      { id: 72, kode: '72', nama: 'SULAWESI TENGAH', createdAt: new Date(), updatedAt: new Date() },
      { id: 73, kode: '73', nama: 'SULAWESI SELATAN', createdAt: new Date(), updatedAt: new Date() },
      { id: 74, kode: '74', nama: 'SULAWESI TENGGARA', createdAt: new Date(), updatedAt: new Date() },
      { id: 75, kode: '75', nama: 'GORONTALO', createdAt: new Date(), updatedAt: new Date() },
      { id: 76, kode: '76', nama: 'SULAWESI BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 81, kode: '81', nama: 'MALUKU', createdAt: new Date(), updatedAt: new Date() },
      { id: 82, kode: '82', nama: 'MALUKU UTARA', createdAt: new Date(), updatedAt: new Date() },
      { id: 91, kode: '91', nama: 'PAPUA', createdAt: new Date(), updatedAt: new Date() },
      { id: 92, kode: '92', nama: 'PAPUA BARAT', createdAt: new Date(), updatedAt: new Date() },
      { id: 93, kode: '93', nama: 'PAPUA SELATAN', createdAt: new Date(), updatedAt: new Date() },
      { id: 94, kode: '94', nama: 'PAPUA TENGAH', createdAt: new Date(), updatedAt: new Date() },
      { id: 95, kode: '95', nama: 'PAPUA PEGUNUNGAN', createdAt: new Date(), updatedAt: new Date() },
      { id: 96, kode: '96', nama: 'PAPUA BARAT DAYA', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Provinsis', null, {});
  },
};
