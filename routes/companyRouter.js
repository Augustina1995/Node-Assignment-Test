import express from "express";
import { addCompany, getCompanies, getCompanyById } from "../controllers/companyController.js";

const router = express.Router();

router.get("/companies", getCompanies);

router.get("/companies/:id", getCompanyById);

router.post("/companies", addCompany);

router.put("/companies/:id");

export default router;