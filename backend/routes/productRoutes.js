import express from "express";

import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts);
productRouter.get("/:id", getProductById);

export default productRouter;
