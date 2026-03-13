import type React from "react";

import { BrandName } from "./BrandName";
import { Basket } from "./Basket";

export const Header = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "9fr 1fr",
        height: "fit-content",
      }}
    >
      <BrandName />
      <Basket />
    </div>
  );
};
