import express from "express";
import {
  activateJourny,
  addDriver,
  addJourny,
  addquote,
  addtruck,
  changePassword,
  deActivateJourny,
  deleteDriver,
  deleteJourny,
  deleteQuote,
  deleteTruck,
  getData,
  getJourny,
  getQuote,
  login,
  myDrivers,
  myTrucks,
  updateTrans,
} from "../Controller/trans/trans2.con.js";

const router = express.Router();
router.get("/:id", getData);
router.post("/login", login);
router.get("/driver/:id", myDrivers);
router.get("/truck/:id", myTrucks);
router.put("/add/:id", addDriver);
router.put("/update/:id", updateTrans);
router.put("/changePassword/:id", changePassword);
router.post("/addJourney/:id", addJourny);
router.get("/getjourney/:id", getJourny);
router.put("/addtruck/:id", addtruck);
router.delete("/truck/:id", deleteTruck);
router.delete("/journey/:id", deleteJourny);
router.put("/activateJourney/:id", activateJourny);
router.put("/deactivateJourney/:id", deActivateJourny);
router.delete("/deleteDriver/:id", deleteDriver);
router.get("/quote/:id", getQuote);
router.put("/quotes/:id", addquote);
router.delete("/quotes/:id", deleteQuote);
export default router;
