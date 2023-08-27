import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export const getCartItems = async (req, res) => {
  const user = req.user.id;
  if (!user) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
  const cartItems = await CartItem.find({
    user,
  })
    .populate("product")
    .exec();

  return res.json(cartItems);
};

export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ msg: "Unauthorized user" });
    }
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(400).json({ msg: "product not found" });
    const cart = await CartItem.create({
      product,
      quantity: req.body.quantity,
      user,
    });
    return res.status(201).json(cart);
  } catch (error) {
    console.log("Error adding cart item: ", error);
    res.status(500).json({ msg: "unable to add cart item" });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity, id } = req.body;
    const updatedItem = await CartItem.findByIdAndUpdate(id, {
      quantity,
    }).exec();
    res.json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to update the cart item" });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      res.status(400).json({ msg: "product id must be provided" });
    }
    await CartItem.findByIdAndDelete(id);
    res.json({ msg: "item deleted successfully" });
  } catch (error) {}
};
