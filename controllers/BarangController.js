import Barang from "../models/BarangModel.js";

export const getBarang = async (req, res) => {
  try {
    const response = await Barang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBarangById = async (req, res) => {
  try {
    const response = await Barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBarang = async (req, res) => {
  try {
    await Barang.create(req.body);
    res.status(201).json({ msg: "Barang Telah Dibuat" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBarang = async (req, res) => {
  try {
    await Barang.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Barang Telah Diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBarang = async (req, res) => {
  try {
    await Barang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Barang Telah Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
