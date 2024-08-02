const { Provinsi } = require('../../models');

class ProvinsiService {
  async getAll() {
    return await Provinsi.findAll();
  }

  async getById(id) {
    return await Provinsi.findByPk(id);
  }
}

module.exports = new ProvinsiService();
