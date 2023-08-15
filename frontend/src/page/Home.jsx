import { Typography } from "@mui/material";

import { products } from "../products";
import { Product } from "../components/products/Product";
import "./Home.css";

export function Home() {
  return (
    <div className="products-wrapper">
      <Typography variant="h4" component="h1">
        Latest Products
      </Typography>
      <div className="products">
        {products.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
