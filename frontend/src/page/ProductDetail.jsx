import React from "react";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  return <div>ProductDetail {id}</div>;
}
