import express from "express";
import { products } from "./products.js";

const app = express();
const PORT = 5000;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) return res.status(404).json({ msg: "product not found" });
  return res.json(product);
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
