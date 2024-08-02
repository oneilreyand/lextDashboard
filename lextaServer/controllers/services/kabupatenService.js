// services/kabupatenService.js
const { Kabupaten } = require('../../models');

class KabupatenService {
  async getAll() {
    return await Kabupaten.findAll();
  }

  async getById(id) {
    return await Kabupaten.findByPk(id);
  }

  async getByProvinsiId(provinsiId) {
    try {
      return await Kabupaten.findAll({
        where: { provinsiId }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

module.exports = new KabupatenService();
