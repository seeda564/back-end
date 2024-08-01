import express from "express";
import {
  activateTruck,
  deactivateTruck,
  deleteTruck,
  getAllTruck,
} from "../Controller/truck.con.js";
const router = express.Router();

router.get("/getall", getAllTruck);
router.delete("/delete/:id", deleteTruck);
router.put("/activate/:id", activateTruck);
router.put("/deactivate/:id", deactivateTruck);
export default router;
