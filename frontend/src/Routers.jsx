import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductDetail } from "./page/ProductDetail";
import { Layout } from "./page/Layout";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
