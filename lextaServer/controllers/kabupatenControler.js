const kabupatenService = require('./services/kabupatenService');

class KabupatenController {
  async getAll(req, res) {
    try {
      const kabupaten = await kabupatenService.getAll();
      res.json(kabupaten);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const kabupaten = await kabupatenService.getById(req.params.id);
      if (!kabupaten) return res.status(404).json({ error: 'Kabupaten not found' });
      res.json(kabupaten);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getByProvinsiId(req, res) {
    try {
      const kabupatens = await kabupatenService.getByProvinsiId(req.params.id);
      res.status(200).json(kabupatens);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new KabupatenController();
