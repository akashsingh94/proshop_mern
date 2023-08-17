import { products } from "../products.js";

// @desc get all products
// @route /api/products
export const getAllProducts = (req, res) => {
  return res.json(products);
};

export const getProductById = (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) return res.status(404).json({ msg: "product not found" });
  return res.json(product);
};
