import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const router1 = express.Router();

router1.post("/login", loginUser);
router1.post("/register", registerUser);
router1.post("/logout", logoutUser);

export default router1;
