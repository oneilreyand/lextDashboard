const { Kelurahan } = require('../../models');

class KelurahanService {
  async getAll() {
    return await Kelurahan.findAll();
  }

  async getById(id) {
    return await Kelurahan.findByPk(id);
  }
}

module.exports = new KelurahanService();
