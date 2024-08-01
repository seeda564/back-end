import express from "express";

import ApiRespones from "../Helper/ApiRespones.js";
import { alogin } from "../Controller/login.js";
import { logout } from "../Controller/logout.js";
const router = express.Router();

router.post("/login", alogin);
// router.post("/login", loginController);
router.post("/logout", logout);

export default router;
