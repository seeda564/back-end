import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "dotenv/config";
import adminRoutes from "./Routes/adminRoutes.js";

import configRoute from "./Routes/configRoute.js";
import bodyParser from "body-parser";
import custumerRote from "./Routes/custumerRote.js";
import transRoute from "./Routes/transRote.js";
import cargoRoute from "./Routes/cargoRoute.js";
import truckRoute from "./Routes/truckRoute.js";
import catogryRoute from "./Routes/catogryRoute.js";
import journeyRoute from "./Routes/journeyRoute.js";
import countryRoute from "./Routes/countryRoute.js";
import shipmentRoute from "./Routes/shipmentRoute.js";
import transRoute2 from "./Routes/transRoute2.js";
//server
const app = express();

const port = process.env.PORT || 8000;
//middleware
//app.use(cors({ origins: ["http://localhost:3001", "http://localhost:3000"] }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/admin", adminRoutes);
app.use("/api/config", configRoute);
app.use("/api/customer", custumerRote);
app.use("/api/trans", transRoute);
app.use("/api/cargo", cargoRoute);
app.use("/api/truck", truckRoute);
app.use("/api/catogry", catogryRoute);
app.use("/api/journey", journeyRoute);
app.use("/api/country", countryRoute);
app.use("/api/shipment", shipmentRoute);

app.use("/trans", transRoute2);
//server start
app.use("/", (req, res) => {
  res.status(404).json({ error: "page not found" });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
