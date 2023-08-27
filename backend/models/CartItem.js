import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Types.ObjectId, ref: "Product" },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    quantity: {
      type: Number,
      require: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);

export default CartItem;
