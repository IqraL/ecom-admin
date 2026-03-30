import type React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import type { SortByType } from "../SortBy/SortBy";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import type { Product } from "../../SharedTypes";
import { CircularIndeterminate } from "../Shared";

const API_URL = import.meta.env.VITE_API_URL;


export const ProductsPage = () => {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [maxPage, setMaxPage] = useState<number>(1);

  const updatePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getMaxPage = async () => {
    const response = await fetch(`${API_URL}/products/pagination-data`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });

    const { numberOfPages } = await response.json();
    setMaxPage(numberOfPages);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      let pageNumber = page - 1;
      if (pageNumber > maxPage) {
        pageNumber = maxPage - 1;
      }
      const response = await fetch(
        `${API_URL}/products/get-all?pageNumber=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          credentials: "include",
        }
      );

      const products = await response.json();
      setProducts(products);
      setLoadingProducts(false);
    };

    fetchProducts();
    getMaxPage();
  }, [maxPage, page]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        {(loadingProducts || !products.length) && <CircularIndeterminate />}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>

      <div
        style={{
          display: "flex",
          paddingTop: 50,
          paddingBottom: 50,
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={maxPage}
            variant="outlined"
            color="primary"
            onChange={updatePage}
          />
        </Stack>
      </div>
    </div>
  );
};
