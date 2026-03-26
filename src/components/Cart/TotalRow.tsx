import type React from "react";

export const TotalRow = ({ total }: { total: number; }) => {
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
          paddingTop: "10px",
          borderTop: "2px solid #e5e5e5",

          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "black",

          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>Total: </div>
        <div>£{total}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
