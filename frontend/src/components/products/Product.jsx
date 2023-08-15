import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { ProductRating } from "./ProductRating";
import { Link } from "react-router-dom";

export function Product(props) {
  const { product } = props;
  if (!product) return null;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={`/product/${product._id}`}>
        <CardMedia
          sx={{ height: 200 }}
          image={product.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <ProductRating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <Typography variant="body1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
