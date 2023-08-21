import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/dbConnect.js";
import productRouters from "./routes/productRoutes.js";
import userRouters from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouters);
app.use("/api/users", userRouters);
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
  connectDb();
});
