const CabangService = require('./services/cabangService');

exports.create = async (req, res) => {
  try {
    const cabang = await CabangService.createCabang(req.body);
    res.status(201).json(cabang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const cabangs = await CabangService.getAllCabangs();
    res.status(200).json(cabangs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const cabang = await CabangService.getCabangById(req.params.id);
    res.status(200).json(cabang);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const cabang = await CabangService.updateCabang(req.params.id, req.body);
    res.status(200).json(cabang);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await CabangService.deleteCabang(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
