import express from "express";
import {
  addCompanyProfile,
  getCompanyProfiles,
  updateCompanyProfileById,
} from "../controllers/companyProfileController.js";

const router = express.Router();

router.get("/companyProfiles", getCompanyProfiles);

router.post("/companyProfiles", addCompanyProfile);

router.put("/companyProfiles/:id", updateCompanyProfileById);

export default router;
