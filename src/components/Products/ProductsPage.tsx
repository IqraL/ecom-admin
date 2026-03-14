import type React from "react";
import { dummyProduct, dummyProductTwo } from "./dummyProduct";
import type { SortByType } from "../SortBy/SortBy";
import { ProductCard } from "./ProductCard";

export const ProductsPage = ({ sortBy }: { sortBy: SortByType }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: 25,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProductTwo} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
    </div>
  );
};
