import type React from "react";
import { CartAction } from "../../SharedTypes";


export const CartUpdateButton = ({
  updateCart, cartAction,
}: {
  updateCart: (action: CartAction) => void;
  cartAction: CartAction;
}) => {
  return (
    <button
      onClick={() => updateCart(cartAction)}
      style={{
        width: 26,
        height: 26,
        backgroundColor: "#f9fafb",
        color: "#111827",
        fontSize: 18,
        fontWeight: 600,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        border: "1px black solid"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#e5e7eb";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#f9fafb";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.95)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {cartAction === CartAction.ADD ? "+" : "-"}
    </button>
  );
};
