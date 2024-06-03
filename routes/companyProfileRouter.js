import express from "express";
import { addCompanyProfile } from "../controllers/companyProfileController.js";

const router = express.Router();

router.get("/companyProfiles");

router.post("/companyProfiles", addCompanyProfile);

router.put("/companyProfiles/:id");

export default router;