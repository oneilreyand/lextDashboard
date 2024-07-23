const TravelService = require('./services/terevelService');

class TravelController {
  static async createTravel(req, res) {
    try {
      const travel = await TravelService.createTravel(req.body);
      res.status(201).json({ message: 'Travel created successfully', data: travel });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }

  static async getAllTravels(req, res) {
    try {
      const travels = await TravelService.getAllTravels();
      res.status(200).json({ data: travels });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }

  static async getTravelById(req, res) {
    try {
      const travel = await TravelService.getTravelById(req.params.id);
      res.status(200).json({ data: travel });
    } catch (error) {
      res.status(error.message === 'Travel not found' ? 404 : 500).json({ message: error.message });
    }
  }

  static async updateTravel(req, res) {
    try {
      const travel = await TravelService.updateTravel(req.params.id, req.body);
      res.status(200).json({ message: 'Travel updated successfully', data: travel });
    } catch (error) {
      res.status(error.message === 'Travel not found' ? 404 : 500).json({ message: error.message });
    }
  }

  static async deleteTravel(req, res) {
    try {
      await TravelService.deleteTravel(req.params.id);
      res.status(200).json({ message: 'Travel deleted successfully' });
    } catch (error) {
      res.status(error.message === 'Travel not found' ? 404 : 500).json({ message: error.message });
    }
  }
}

module.exports = TravelController;
