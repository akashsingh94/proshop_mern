import { Alert, Paper, Typography } from "@mui/material";

import { ProductRating } from "./ProductRating";
import { AddToCartButton } from "./AddToCartButton";
import "./ProductDetails.css";

export function ProductDetails({ product }) {
  const { countInStock, image, name, rating, numReviews, price, description } =
    product;
  const isOutOfStock = countInStock <= 0;

  return (
    <div className="product-details-page">
      <Paper sx={{ m: 3 }} className="product-details-wrapper">
        <div className="product-image">
          <img className="image" src={image} alt={name} />
          <AddToCartButton product={product} isOutOfStock={isOutOfStock} />
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
