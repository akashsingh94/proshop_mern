import express from "express";

import { isAuthenticatedUser } from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/", isAuthenticatedUser, getUserProfile);
profileRouter.post("/update", isAuthenticatedUser, updateUserProfile);

export default profileRouter;
