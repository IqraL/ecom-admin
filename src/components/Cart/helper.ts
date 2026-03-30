import type { FetchCartParams, FetchCartResponse } from "../../SharedTypes";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchCart = async ({
  setIsLoading,
  setFetchedTotal,
  setCartItems,
}: FetchCartParams) => {
  try {
    setIsLoading(true);
    const response = await fetch(`${API_URL}/cart/fetch`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });
    const { cart, total }: FetchCartResponse = await response.json();
    setFetchedTotal(total);
    if (cart) {
      setCartItems(cart.cartItems);
    }
    setIsLoading(false);
  } catch (error) {
    console.log("fetchProduct error", error);
    setIsLoading(false);
  }
};
