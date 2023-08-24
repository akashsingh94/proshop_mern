import express from "express";

import { isAdminUser } from "../middleware/authMiddleware.js";
import { getAllProductsForAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/products", isAdminUser, getAllProductsForAdmin);

export default adminRouter;
