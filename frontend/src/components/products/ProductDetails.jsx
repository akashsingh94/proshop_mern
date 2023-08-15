import { Alert, Button, Paper, Typography } from "@mui/material";
import CartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductDetails.css";
import { ProductRating } from "./ProductRating";

export function ProductDetails({ product }) {
  const { countInStock, image, name, rating, numReviews, price, description } =
    product;
  const isOutOfStock = countInStock <= 0;
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
