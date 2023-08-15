import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { NoData } from "../components/feedback/NoData";
import { ProductDetails } from "../components/products/ProductDetails";
import { Spinner } from "../components/feedback/Spinner";
import { ServerError } from "../components/feedback/ServerError";

export function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useQuery(["product", id], () =>
    fetch(`/api/product/${id}`).then((res) => res.json())
  );

  if (isLoading) return <Spinner useBackdrop />;
  if (error) return <ServerError onRetry={refetch} />;
  if (!data) return <NoData message={`No product found with id ${id}`} />;
  return <ProductDetails product={data} />;
}
