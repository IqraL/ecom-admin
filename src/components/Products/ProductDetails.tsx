import type React from "react";
import { useMemo, useState } from "react";

const dummyProductWithVariants = {
  _id: "69b872d1c2e4d3d6b5443559",
  id: "p3",
  name: "North Vale Heavy Hoodie",
  tag: "hoodie",
  description:
    "A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.\n\n",
  coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
  position: 3,
  meta: [
    {
      stock: 60,
      size: "M",
      color: "Black",
      imgs: ["https://m.media-amazon.com/images/I/41GWU6v+dUL._AC_SX679_.jpg"],
      price: 75,
      discounted: false,
    },
    {
      stock: 45,
      size: "L",
      color: "White",
      imgs: ["https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg"],
      price: 75,
      discounted: true,
      discountedPrice: 65,
    },
    {
      stock: 45,
      size: "S",
      color: "White",
      imgs: ["https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg"],
      price: 75,
      discounted: true,
      discountedPrice: 65,
    },
    {
      stock: 45,
      size: "S",
      color: "Blue",
      imgs: ["https://m.media-amazon.com/images/I/71lP3O+MMLL._AC_SX679_.jpg"],
      price: 75,
      discounted: true,
      discountedPrice: 65,
    },
  ],
};
export const ProductDetails = () => {
  const colors = useMemo(() => {
    const values = dummyProductWithVariants.meta.map(
      (variant) => variant.color
    );
    return [...new Set(values)];
  }, []);

  const sizes = useMemo(() => {
    const values = dummyProductWithVariants.meta.map((variant) => variant.size);
    return [...new Set(values)];
  }, []);

  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes?.[0] || null
  );

  const filteredProducts = useMemo(() => {
    return dummyProductWithVariants.meta.filter((productVariants) => {
      return (
        productVariants.size === selectedSize &&
        productVariants.color === selectedColor
      );
    });
  }, [selectedColor, selectedSize]);

  if (!colors.length || !sizes.length) {
    return <div>No initial Values for colors or sizes</div>;
  }

  console.log("sizes", sizes);
  console.log("colors", colors);

  console.log("selectedSize", selectedSize);
  console.log("selectedColor", selectedColor);

  console.log("allVariants", dummyProductWithVariants.meta);
  console.log("filteredProducts", filteredProducts);
  return (
    <div>
      <div>
        {colors.map((color) => {
          return (
            <button onClick={() => setSelectedColor(color)}>{color}</button>
          );
        })}
      </div>
      <div>
        {sizes.map((size) => {
          return <button onClick={() => setSelectedSize(size)}>{size}</button>;
        })}
      </div>
    </div>
  );
};
