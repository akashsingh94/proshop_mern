import { Typography } from "@mui/material";
import { useQuery } from "react-query";

import { Product } from "../components/products/Product";
import { Spinner } from "../components/feedback/Spinner";
import { ServerError } from "../components/feedback/ServerError";
import "./Home.css";

export function Home() {
  const { isLoading, error, data, refetch } = useQuery("products", () =>
    fetch("/api/products").then((res) => res.json())
  );

  if (isLoading) return <Spinner useBackdrop />;
  if (error) return <ServerError onRetry={refetch} />;
  return (
    <div className="products-wrapper">
      <Typography variant="h4" component="h1">
        Latest Products
      </Typography>
      <div className="products">
        {data.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
