import { Alert, Button, Paper, Typography } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { useCallback } from "react";
import { useAtom } from "jotai/react";

import { ProductRating } from "./ProductRating";
import { cartItemsAtom } from "../../atom/cartAtoms";
import { toasterAtom } from "../../atom/globalAtom";
import "./ProductDetails.css";

export function ProductDetails({ product }) {
  const [, setCartItems] = useAtom(cartItemsAtom);
  const [, setToasterInfo] = useAtom(toasterAtom);
  const {
    countInStock,
    image,
    name,
    rating,
    numReviews,
    price,
    description,
    _id,
  } = product;
  const isOutOfStock = countInStock <= 0;

  const handleAddToCart = useCallback(() => {
    setCartItems((preItems) => {
      const alreadyAdded = preItems && preItems.some((i) => i._id === _id);
      if (alreadyAdded) {
        return preItems.map((i) => {
          if (i._id === _id) return { _id, quantity: i.quantity + 1 };
          return i;
        });
      }
      return [...preItems, { _id, quantity: 1 }];
    });
    setToasterInfo({
      open: true,
      message: "Item added in the cart successfully",
      severity: "success",
    });
  }, [_id, setCartItems, setToasterInfo]);

  return (
    <div className="product-details-page">
      <Paper className="product-details-wrapper">
        <div className="product-image">
          <img className="image" src={image} alt={name} />
          <Button
            disabled={isOutOfStock}
            startIcon={<CartIcon />}
            size="large"
            variant="contained"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
        <div className="product-details">
          {isOutOfStock && (
            <Alert severity="warning">
              This product is <strong>out of stock!</strong>
            </Alert>
          )}
          <Typography gutterBottom variant="h6" component="p">
            {name}
          </Typography>
          <ProductRating value={rating} text={`${numReviews} reviews`} />
          <Typography gutterBottom variant="h5" component="p">
            ${price}
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            {description}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
