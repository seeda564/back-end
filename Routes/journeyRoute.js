import express from "express";
import {
  addjourney,
  getjourney,
  getjourneys,
  updatejourney,
  deletejourney,
  activateJourney,
  deactivateJourney,
} from "../Controller/catogry/journey/journey.cont.js";

const router = express.Router();
router.post("/add", addjourney);
router.get("/getall", getjourneys);
router.get("/get/:id", getjourney);
router.delete("/delete/:id", deletejourney);
router.put("/update/:id", updatejourney);
router.put("/activate/:id", activateJourney);
router.put("/deActivate/:id", deactivateJourney);
export default router;
