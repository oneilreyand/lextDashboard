const kelurahanService = require('./services/kelurahanService');

class KelurahanController {
  async getAll(req, res) {
    try {
      const kelurahan = await kelurahanService.getAll();
      res.json(kelurahan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const kelurahan = await kelurahanService.getById(req.params.id);
      if (!kelurahan) return res.status(404).json({ error: 'Kelurahan not found' });
      res.json(kelurahan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new KelurahanController();
