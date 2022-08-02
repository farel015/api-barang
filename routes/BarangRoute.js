import express from "express";
import { getBarang, getBarangById, createBarang, updateBarang, deleteBarang } from "../controllers/BarangController.js";

const router = express.Router();

router.get("/barang", getBarang);
router.get("/barang/:id", getBarangById);
router.post("/barang", createBarang);
router.patch("/barang/:id", updateBarang);
router.delete("/barang/:id", deleteBarang);

export default router;
