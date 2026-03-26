import type React from "react";
import { useEffect, useState } from "react";
import type {
  CartItem,
  FetchCartResponse,
  Product,
  Cart,
} from "../../SharedTypes";
import { Box, CircularProgress } from "@mui/material";
import { CircularIndeterminate } from "../Shared";
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
  return <div>cart page</div>;
};
