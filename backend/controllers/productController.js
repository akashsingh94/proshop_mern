import Product from "../models/Product.js";

// @desc get all products
// @route /api/products
export const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: "product not found" });
  return res.json(product);
};
