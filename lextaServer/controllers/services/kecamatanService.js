const { where } = require('sequelize');
const { Kecamatan } = require('../../models');

class KecamatanService {
  async getAll() {
    return await Kecamatan.findAll();
  }

  async getById(id) {
    return await Kecamatan.findByPk(id);
  }

  async getByKabupatenId(kabupatenId) {
    try {
      return await Kecamatan.findAll({
        where: { kabupatenId },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

module.exports = new KecamatanService();
