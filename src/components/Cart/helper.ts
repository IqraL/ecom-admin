import type { FetchCartParams, FetchCartResponse } from "../../SharedTypes";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchCart = async ({
  setIsLoading,
  setFetchedProducts,
  setFetchedTotal,
  setFetchedCart,
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
    const { cart, products, total }: FetchCartResponse = await response.json();
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
