const { json } = require('sequelize');
const { Cabang } = require('../../models');

class CabangService {
  static async createCabang(data) {
    try {
      const cabang = await Cabang.create(data);
      return cabang;
    } catch (error) {
      throw new Error(`Error creating cabang: ${error.message}`);
    }
  }

  static async getAllCabangs() {
    try {
      const cabangs = await Cabang.findAll();
      return cabangs;
    } catch (error) {
      throw new Error(`Error fetching cabangs: ${error.message}`);
    }
  }

  static async getCabangById(id) {
    try {
      const cabang = await Cabang.findAll({ where: { travelId: id } });
      if (!cabang) {
        throw new Error('Cabang not found');
      }
      return json(cabang);
    } catch (error) {
      throw new Error(`Error fetching cabang: ${error.message}`);
    }
  }

  static async updateCabang(id, data) {
    console.log(id, data)
    try {
      const cabang = await Cabang.findByPk(id);
      if (!cabang) {
        throw new Error('Cabang not found');
      }
      await cabang.update(data);
      return cabang;
    } catch (error) {
      throw new Error(`Error updating cabang: ${error.message}`);
    }
  }

  static async deleteCabang(id) {
    try {
      const cabang = await Cabang.findByPk(id);
      if (!cabang) {
        throw new Error('Cabang not found');
      }
      await cabang.destroy();
    } catch (error) {
      throw new Error(`Error deleting cabang: ${error.message}`);
    }
  }
}

module.exports = CabangService;
