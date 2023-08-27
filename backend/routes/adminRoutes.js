import express from "express";

import { isAdminUser } from "../middleware/authMiddleware.js";
import {
  addNewProduct,
  getAllProductsForAdmin,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter
  .route("/products")
  .get(isAdminUser, getAllProductsForAdmin)
  .post(isAdminUser, addNewProduct);

export default adminRouter;
