import Product from "../models/Product.js";
import User from "../models/User.js";

export const getAllProductsForAdmin = async (req, res) => {
  res.json({ msg: "all products" });
};

export const addNewProduct = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
  if (!req.body) {
    return res.status(400).json({ msg: "Bad product data" });
  }
  const createdProduct = await Product.create({ ...req.body, user });
  res.status(201).json(createdProduct);
};
