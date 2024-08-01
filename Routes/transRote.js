import express from "express";
import {
  activateTrans,
  addTrans,
  deactivateTrans,
  deleteTrans,
  getTrans,
  getallTrans,
  updateTrans,
} from "../Controller/trans/trans.cont.js";
const router = express.Router();
router.get("/getall", getallTrans);
router.get("/get/:id", getTrans);
router.put("/update/:id", updateTrans);
router.delete("/delete/:id", deleteTrans);
router.post("/add", addTrans);
router.put("/activate/:id", activateTrans);
router.put("/deActivate/:id", deactivateTrans);
export default router;
