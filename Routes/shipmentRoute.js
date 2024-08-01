import express, { Router } from "express";
import {
  acceptShipmentQuate,
  activateShipment,
  addShipment,
  deactivateShipment,
  deleteShipmentDetail,
  deleteShipments,
  getCustumerAcceptedShipments,
  getShipment,
  getShipment1,
  getShipmentDetail,
  getShipmentDetails,
  getShipments,
  getTransAcceptedShipments,
} from "../Controller/shipment.cont.js";
const router = express.Router();

router.get("/getall", getShipments);
router.get("/getallSh", getShipmentDetail);
router.delete("/delete/:id", deleteShipments);
router.put("/activate/:id", activateShipment);
router.put("/deactivate/:id", deactivateShipment);
router.post("/add/:id", addShipment);

router.delete("/deleteC/:id", deleteShipmentDetail);

//custumer get
router.get("/getShipandQ/:id", getShipment1);
router.get("/getSh/:id", getShipmentDetails);
router.get("/get/:id", getShipment);
// accept
router.post("/accept/:id", acceptShipmentQuate);
router.get("/getaccept/:id", getCustumerAcceptedShipments);
router.get("/getacceptT/:id", getTransAcceptedShipments);
export default router;
