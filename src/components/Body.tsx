import type React from "react";
import {  Routes, Route } from "react-router";
import type { SortByType } from "../components/SortBy/SortBy";
import { ProductsPage } from "./Products/ProductsPage"
import { ProductDetails } from "./Products/ProductDetails";
import { Cart } from "./Cart/Cart";

export const Body = ({ sortBy }: { sortBy: SortByType }) => {
  console.log(`Body:${sortBy}`);
  return (
    <Routes>
      <Route index element={<ProductsPage sortBy={sortBy} />} />
      <Route path="product" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

