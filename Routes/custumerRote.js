import express from "express";
import {
  activateCustumer,
  addCustumer,
  deactivateCustumer,
  deleteCustumer,
  getCustumer,
  getCustumers,
  updateCustumer,
} from "../Controller/Custumer/custumer.con.js";

const router = express.Router();

router.post("/add", addCustumer);
router.get("/getall", getCustumers);
router.put("/update/:id", updateCustumer);
router.delete("/delete/:id", deleteCustumer);
router.get("/get/:id", getCustumer);
router.put("/deActivate/:id", deactivateCustumer);
router.put("/activate/:id", activateCustumer);
export default router;
