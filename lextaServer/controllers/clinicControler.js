const { Clinic } = require('../models'); // Sesuaikan dengan path model Anda

class ClinicController {
  // Mendapatkan semua clinic
  static async getAllClinics(req, res) {
    try {
      const clinics = await Clinic.findAll();
      res.status(200).json(clinics);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching clinics', error });
    }
  }

  // Mendapatkan satu clinic berdasarkan ID
  static async getClinicById(req, res) {
    const { id } = req.params;
    try {
      const clinic = await Clinic.findByPk(id);
      if (clinic) {
        res.status(200).json(clinic);
      } else {
        res.status(404).json({ message: 'Clinic not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching clinic', error });
    }
  }

  // Membuat clinic baru
  static async createClinic(req, res) {
    const { name, address, propinsi, kota, kelurahan, type, variant, phoneNumber, logo } = req.body;
    try {
      const newClinic = await Clinic.create({ name, address, propinsi, kota, kelurahan, type, variant, phoneNumber, logo });
      res.status(201).json(newClinic);
    } catch (error) {
      res.status(500).json({ message: 'Error creating clinic', error });
    }
  }

  // Mengupdate clinic
  static async updateClinic(req, res) {
    const { id } = req.params;
    const { name, address, propinsi, kota, kelurahan, type, variant, phoneNumber, logo } = req.body;
    try {
      const clinic = await Clinic.findByPk(id);
      if (clinic) {
        clinic.name = name;
        clinic.address = address;
        clinic.propinsi = propinsi;
        clinic.kota = kota;
        clinic.kelurahan = kelurahan;
        clinic.type = type;
        clinic.variant = variant;
        clinic.phoneNumber = phoneNumber;
        clinic.logo = logo;
        await clinic.save();
        res.status(200).json(clinic);
      } else {
        res.status(404).json({ message: 'Clinic not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating clinic', error });
    }
  }

  // Menghapus clinic
  static async deleteClinic(req, res) {
    const { id } = req.params;
    try {
      const clinic = await Clinic.findByPk(id);
      if (clinic) {
        await clinic.destroy();
        res.status(200).json({ message: 'Clinic deleted successfully' });
      } else {
        res.status(404).json({ message: 'Clinic not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting clinic', error });
    }
  }
}

module.exports = ClinicController;
