import React, { useCallback, useMemo, useState } from "react";
import type { CartItem, FetchCartParams } from "../../SharedTypes";
import { CartAction } from "../../SharedTypes";
import { fetchCart } from "./helper";
const API_URL = import.meta.env.VITE_API_URL;

export const ProductRow = ({
  cartItem,
  reFetchCart,
}: {
  cartItem: CartItem;
  reFetchCart: FetchCartParams;
}) => {
  const priceOfItem = useMemo(() => {
    return cartItem.discounted
      ? cartItem.discountedPrice ?? cartItem.price
      : cartItem.price;
  }, [cartItem.discounted, cartItem.discountedPrice, cartItem.price]);

  const totalItemPrice = useMemo(() => {
    return priceOfItem * cartItem.quantity;
  }, [cartItem.quantity, priceOfItem]);

  const [quantity, setQuantity] = useState(cartItem.quantity);

  const removeItem = useCallback(async () => {
    try {
      await fetch(`${API_URL}/cart/remove`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          productId: cartItem.productId,
          variantId: cartItem.variantId,
        }),
        credentials: "include",
      });
      fetchCart({ ...reFetchCart });
    } catch (error) {
      console.log("fetchProduct error", error);
    }
  }, [cartItem.productId, cartItem.variantId, reFetchCart]);

  const updateCart = useCallback(
    async (action: CartAction) => {
      await fetch(`${API_URL}/cart/add`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          cartItem,
          cartAction:
            action === CartAction.ADD ? CartAction.ADD : CartAction.REMOVE,
        }),
        credentials: "include",
      });
      fetchCart({ ...reFetchCart });
    },
    [cartItem, reFetchCart]
  );

  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gridColumnGap: "20px",
          width: "100%",
        }}
      >
        <div>{cartItem.name}</div>
        <div>{cartItem.size}</div>
        <div>{cartItem.color}</div>
        <div style={{ display: "flex", flexDirection: "row" }}>{quantity}</div>
        <div>£{priceOfItem}</div>
        <div>£{totalItemPrice}</div>
        <div>
          <button
            onClick={() => {
              updateCart(CartAction.ADD);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCart(CartAction.REMOVE);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button onClick={removeItem}>Bin</button>
        </div>
      </div>
    </div>
  );
};
