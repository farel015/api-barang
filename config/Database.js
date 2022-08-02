import { Sequelize } from "sequelize";

const db = new Sequelize("data_barang", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
