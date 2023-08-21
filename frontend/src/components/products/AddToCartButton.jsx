import { Button } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { Link } from "react-router-dom";

import { cartItemsAtom } from "../../atom/cartAtoms";
import { toasterAtom } from "../../atom/globalAtom";

export function AddToCartButton({ product, isOutOfStock }) {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [, setToasterInfo] = useAtom(toasterAtom);
  const { _id } = product;
  const alreadyAddedInCart = cartItems && cartItems.some((i) => i._id === _id);

  const handleAddToCart = useCallback(() => {
    setCartItems((preItems) => [...preItems, { ...product, quantity: 1 }]);
    setToasterInfo({
      open: true,
      message: "Item added in the cart successfully",
      severity: "success",
    });
  }, [product, setCartItems, setToasterInfo]);

  if (alreadyAddedInCart)
    return (
      <Button
        disabled={isOutOfStock}
        startIcon={<CartIcon />}
        size="large"
        variant="contained"
        component={Link}
        to="/cart"
        color="secondary"
      >
        Go to Cart
      </Button>
    );

  return (
    <Button
      disabled={isOutOfStock}
      startIcon={<CartIcon />}
      size="large"
      variant="contained"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
}
