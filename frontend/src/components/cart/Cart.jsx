import { Typography } from "@mui/material";

import { CartItems } from "./CartItems";
import "./Cart.css";

export function Cart() {
  return (
    <div className="cart-wrapper">
      <Typography gutterBottom variant="h4" component="h1">
        Cart Items
      </Typography>
      <CartItems />
    </div>
  );
}
