const kecamatanService = require('./services/kecamatanService');

class KecamatanController {
  async getAll(req, res) {
    try {
      const kecamatan = await kecamatanService.getAll();
      res.json(kecamatan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const kecamatan = await kecamatanService.getById(req.params.id);
      if (!kecamatan) return res.status(404).json({ error: 'Kecamatan not found' });
      res.json(kecamatan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getByKabupatenId(req, res) {
    try {
      const kecamatans = await kecamatanService.getByKabupatenId(req.params.id)
      res.status(200).json(kecamatans);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new KecamatanController();
