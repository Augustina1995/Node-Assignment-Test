import express from "express";
import { addCompany, getCompanies, getCompanyById, updateCompanyById } from "../controllers/companyController.js";

const router = express.Router();

router.get("/companies", getCompanies);

router.get("/companies/:id", getCompanyById);

router.post("/companies", addCompany);

router.put("/companies/:id", updateCompanyById);

export default router;