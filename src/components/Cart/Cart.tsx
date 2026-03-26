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
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/cart/fetch`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          credentials: "include",
        });
        const { cart, products, total }: FetchCartResponse =
          await response.json();
        setFetchedProducts(products);
        setFetchedTotal(total);
        setFetchedCart(cart);
        if (cart) {
          setCartItems(cart.cartItems);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("fetchProduct error", error);
        setIsLoading(false);
      }
    };

    fetchCart();
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
          return <ProductRow cartItem={cartItem} />;
        })}
        <TotalRow total={fetchedTotal ?? 0} />
      </div>
      <div></div>
    </div>
  );
};


