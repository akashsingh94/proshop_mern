import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import { connectDb } from "./config/dbConnect.js";
import productRouters from "./routes/productRoutes.js";
import userRouters from "./routes/userRoutes.js";
import profileRouters from "./routes/profileRouter.js";
import adminRouters from "./routes/adminRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.use("/api/products", productRouters);
app.use("/api/users", userRouters);
app.use("/api/profile", profileRouters);
app.use("/api/admin", adminRouters);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
  connectDb();
});
