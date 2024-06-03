import express from "express";
import companyRouter from "./companyRouter.js";
import companyProfileRouter from "./companyProfileRouter.js";

const router = express.Router();

router.use(companyRouter);
router.use(companyProfileRouter);

export default router;
