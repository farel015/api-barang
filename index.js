import express from "express";
import cors from "cors";
import BarangRoute from "./routes/BarangRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BarangRoute);

app.listen(5000, () => console.log("Server berjalan"));
