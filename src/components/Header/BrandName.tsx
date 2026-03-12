import type React from "react";
import logo from "../../assets/brandLogo.svg";

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
        <img height={100} width={700} src={logo} />
      </div>
      <div></div>
    </div>
  );
};
