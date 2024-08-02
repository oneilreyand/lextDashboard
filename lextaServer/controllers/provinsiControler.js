const provinsiService = require('./services/provinsiService');

class ProvinsiController {
  async getAll(req, res) {
    try {
      const provinsi = await provinsiService.getAll();
      res.json(provinsi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const provinsi = await provinsiService.getById(req.params.id);
      if (!provinsi) return res.status(404).json({ error: 'Provinsi not found' });
      res.json(provinsi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProvinsiController();
