import mongoose from "mongoose";

const shippingAddressSchema = new mongoose.Schema(
  {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ShippingAddress = mongoose.model(
  "ShippingAddress",
  shippingAddressSchema
);

export default ShippingAddress;
