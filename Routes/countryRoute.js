import express from "express";
import {
  addCity,
  addCountry,
  addState,
  deleteCity,
  deleteState,
  getCountry,
  getStates,
  getcities,
} from "../Controller/country.con.js";

const router = express.Router();
router.post("/add", addCountry);
router.get("/getall", getCountry);
//state
router.put("/addstate/:id", addState);
router.get("/state/getall/:id", getStates);
router.delete("/state/delete/:id", deleteState);

//city
router.put("/state/addcity/:id", addCity);
router.get("/state/getcities/:id", getcities);
router.delete("/state/deletecity/:id", deleteCity);
export default router;
