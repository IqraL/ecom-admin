import type React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export const Basket = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "grab",
      }}
    >
      <a
        href="/cart"
        style={{
          color: "inherit",
          textDecoration: "none",
          outline: "none",
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
      </a>
    </div>
  );
};
