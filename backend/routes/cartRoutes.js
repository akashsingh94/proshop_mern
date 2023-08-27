import express from "express";
import { isAuthenticatedUser } from "../middleware/authMiddleware.js";
import {
  addItemToCart,
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "../controllers/cartController.js";

const cartRouters = express.Router();

cartRouters
  .route("/")
  .get(isAuthenticatedUser, getCartItems)
  .post(isAuthenticatedUser, addItemToCart)
  .put(isAuthenticatedUser, updateCartItem)
  .delete(isAuthenticatedUser, deleteCartItem);

export default cartRouters;
