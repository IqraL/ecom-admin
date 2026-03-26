import type React from "react";
import { useEffect, useState } from "react";
import type {
  CartItem,
  FetchCartResponse,
  Product,
  Cart,
} from "../../SharedTypes";
import { CircularIndeterminate } from "../Shared";
import { ProductRow } from "./ProductRow";
import { ProductHeadings } from "./ProductHeadings";
import { TotalRow } from "./TotalRow";
import { fetchCart } from "./helper";

const API_URL = import.meta.env.VITE_API_URL;

export const CartPage = () => {
  const [fetchedCart, setFetchedCart] = useState<Cart | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
  const [fetchedTotal, setFetchedTotal] = useState<number | null>(null);
  const [fetchedProducts, setFetchedProducts] = useState<Product[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCart({
      setFetchedCart,
      setCartItems,
      setFetchedTotal,
      setFetchedProducts,
      setIsLoading,
    });
  }, []);

  if (isLoading) {
    return <CircularIndeterminate />;
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        paddingTop: "150px",
      }}
    >
      <div></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductHeadings />
        {cartItems?.map((cartItem) => {
          return (
            <ProductRow
              cartItem={cartItem}
              reFetchCart={{
                setFetchedCart,
                setCartItems,
                setFetchedTotal,
                setFetchedProducts,
                setIsLoading,
              }}
            />
          );
        })}
        <TotalRow total={fetchedTotal ?? 0} />
      </div>
      <div></div>
    </div>
  );
};
