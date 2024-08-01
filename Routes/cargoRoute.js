import express from "express";
import {
  addCargo,
  getCargo,
  getCargos,
  updateCargo,
} from "../Controller/cargo/cargo.con.js";
import { deleteCargo } from "../Controller/cargo/cargo.con.js";
const router = express.Router();
router.post("/add", addCargo);
router.get("/getall", getCargos);
router.get("/get/:id", getCargo);
router.delete("/delete/:id", deleteCargo);
router.put("/update/:id", updateCargo);
export default router;
