import type React from "react";

export const ProductHeadings = () => {
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
          borderBottom: "2px solid #e5e5e5",

          fontSize: 14,
          fontWeight: 800,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#6b7280",

          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div>Name</div>
        <div>Size</div>
        <div>Color</div>
        <div>Quantity</div>
        <div>Price per item</div>
        <div>Total (£)</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
