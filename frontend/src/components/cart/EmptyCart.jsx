import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./EmptyCart.css";

export function EmptyCart() {
  return (
    <div className="empty-cart-wrapper">
      <img
        className="empty-cart-img"
        src="/images/empty-cart.png"
        alt="your cart is empty"
      />
      <Typography variant="h5">Your cart is empty</Typography>
      <Typography variant="body1">Add something to make me happy :(</Typography>
      <Button variant="contained" color="secondary" component={Link} to="/">
        Continue Shopping
      </Button>
    </div>
  );
}
