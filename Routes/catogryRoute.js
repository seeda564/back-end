import express from "express";
import {
  addcatogry,
  getcatogry,
  getcatogrys,
  updatecatogry,
} from "../Controller/catogry/catogry.con.js";
import { deletecatogry } from "../Controller/catogry/catogry.con.js";
const router = express.Router();
router.post("/add", addcatogry);
router.get("/getall", getcatogrys);
router.get("/get/:id", getcatogry);
router.delete("/delete/:id", deletecatogry);
router.put("/update/:id", updatecatogry);
export default router;
