import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/dbConnect.js";
import productRouters from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRouters);
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
  connectDb();
});
