import express from "express";

import {
  changeContact,
  changeEmail,
  changePassword,
  changeUserName,
  getCompany,
} from "../Controller/AdminCon/config.js"; //changePassword from "../Controller/AdminCon/config.js";
import { getDashboard } from "../Controller/dashboardCont.js";

const router = express.Router();

router.put("/changePassword", changePassword);
router.put("/changeEmail", changeEmail);
router.put("/changeUsername", changeUserName);
router.put("/changeContact", changeContact);
router.get("/getCompany", getCompany);

router.get("/getdata", getDashboard);
export default router;
