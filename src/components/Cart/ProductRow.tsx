import React, { useMemo } from "react";
import type { CartItem } from "../../SharedTypes";


export const ProductRow = ({ cartItem }: { cartItem: CartItem; }) => {
  const priceOfItem = useMemo(() => {
    return cartItem.discounted
      ? cartItem.discountedPrice ?? cartItem.price
      : cartItem.price;
  }, [cartItem.discounted, cartItem.discountedPrice, cartItem.price]);

  const totalItemPrice = useMemo(() => {
    return priceOfItem * cartItem.quantity;
  }, [cartItem.quantity, priceOfItem]);

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
        <div style={{ display: "flex", flexDirection: "row" }}>
          {cartItem.quantity}
        </div>
        <div>£{priceOfItem}</div>
        <div>£{totalItemPrice}</div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <button>Bin</button>
        </div>
      </div>
    </div>
  );
};
