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
  const [isHovering, setIsHovering] = useState(false);

  const variants = dummyProductWithVariants.meta;

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

  const filteredProduct = useMemo(() => {
    return variants.find((productVariants) => {
      return (
        productVariants.size === selectedSize &&
        productVariants.color === selectedColor
      );
    });
  }, [selectedColor, selectedSize, variants]);

  if (!colors.length || !sizes.length) {
    return <div>No initial Values for colors or sizes</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        padding: "80px 120px",
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f7f7f7",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <img
          src={filteredProduct?.imgs?.[0] ?? dummyProductWithVariants.coverImg}
          style={{
            width: "100%",
            maxWidth: 450,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 600 }}>
          {dummyProductWithVariants.name}
        </div>

        <div style={{ color: "#555", lineHeight: 1.6 }}>
          {dummyProductWithVariants.description}
        </div>

        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Color</div>
          <div style={{ display: "flex", gap: 10 }}>
            {colors.map((color) => {
              const isSelected = selectedColor === color;
              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 6,
                    border: isSelected ? "2px solid black" : "1px solid #ccc",
                    background: isSelected ? "#000" : "#fff",
                    color: isSelected ? "#fff" : "#000",
                    cursor: "pointer",
                  }}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Size</div>
          <div style={{ display: "flex", gap: 10 }}>
            {sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 6,
                    border: isSelected ? "2px solid black" : "1px solid #ccc",
                    background: isSelected ? "#000" : "#fff",
                    color: isSelected ? "#fff" : "#000",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ fontSize: 24, fontWeight: 600 }}>
          {filteredProduct && "£"}
          {filteredProduct?.discounted
            ? filteredProduct.discountedPrice
            : filteredProduct?.price}
        </div>

        <div>
          {filteredProduct && (
            <button
              onClick={() => {}}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                border: "2px solid black",
                background: isHovering ? "#000" : "#fff",
                color: isHovering ? "#fff" : "#000",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// <div
//   style={{ display: "grid", gridTemplateColumns: "2fr 3fr", paddingTop: 100 }}
// >
//   <div>
//     <img
//       src={filteredProduct?.imgs?.[0] ?? dummyProductWithVariants.coverImg}
//       height={500}
//       width={500}
//     />
//   </div>
//   <div>
//     <div>{dummyProductWithVariants.name}</div>
//     <div>{dummyProductWithVariants.description}</div>

//     <div>
//       {colors.map((color) => {
//         return (
//           <button onClick={() => setSelectedColor(color)}>{color}</button>
//         );
//       })}
//     </div>
//     <div>
//       {sizes.map((size) => {
//         return <button onClick={() => setSelectedSize(size)}>{size}</button>;
//       })}
//     </div>
//     <div>{filteredProduct?.price}</div>
//   </div>
// </div>;
