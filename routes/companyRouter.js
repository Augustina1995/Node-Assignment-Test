import express from "express";
import { addCompany } from "../controllers/companyController.js";

const router = express.Router();

router.get("/companies");

router.get("companies/:id");

router.post("/companies", addCompany);

router.put("/companies/:id");

export default router;