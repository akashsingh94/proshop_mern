import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductPage } from "./page/ProductPage";
import { Layout } from "./page/Layout";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";
import { CartPage } from "./page/CartPage";
import { LoginPage } from "./page/LoginPage";
import { RegisterPage } from "./page/RegisterPage";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
