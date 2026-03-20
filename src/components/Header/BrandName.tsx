import type React from "react";

export const BrandName = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
      }}
    >
      <div></div>

      <div>
        <a href="/" style={{textDecoration: "none", color:"black"}}>
          <h1>Demo</h1>
        </a>
      </div>
      <div></div>
    </div>
  );
};
