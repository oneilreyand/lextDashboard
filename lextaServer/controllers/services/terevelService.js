const { Travel } = require('../../models');

class TravelService {
  static async createTravel(data) {
    try {
      const travel = await Travel.create(data);
      return travel;
    } catch (error) {
      throw new Error(`Error creating travel: ${error.message}`);
    }
  }

  static async getAllTravels() {
    try {
      const travels = await Travel.findAll();
      return travels;
    } catch (error) {
      throw new Error(`Error fetching travels: ${error.message}`);
    }
  }

  static async getTravelById(id) {
    try {
      const travel = await Travel.findByPk(id);
      if (!travel) {
        throw new Error('Travel not found');
      }
      return travel;
    } catch (error) {
      throw new Error(`Error fetching travel: ${error.message}`);
    }
  }

  static async updateTravel(id, data) {
    try {
      const travel = await Travel.findByPk(id);
      if (!travel) {
        throw new Error('Travel not found');
      }
      await travel.update(data);
      return travel;
    } catch (error) {
      throw new Error(`Error updating travel: ${error.message}`);
    }
  }

  static async deleteTravel(id) {
    try {
      const travel = await Travel.findByPk(id);
      if (!travel) {
        throw new Error('Travel not found');
      }
      await travel.destroy();
    } catch (error) {
      throw new Error(`Error deleting travel: ${error.message}`);
    }
  }
}

module.exports = TravelService;
