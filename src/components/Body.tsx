import type React from "react";

import type { SortByType } from "../components/SortBy/SortBy";
import type { Product } from "../SharedTypes";
import { useMemo } from "react";

export const Body = ({ sortBy }: { sortBy: SortByType }) => {
  console.log(`Body:${sortBy}`);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: 25,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProductTwo} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
      <ProductCard product={dummyProduct} />
    </div>
  );
};

export const ProductCard = ({ product }: { product: Product }) => {
  const price = useMemo(() => {
    return product.meta[0]?.price;
  }, [product.meta]);

  return (
    <div
      style={{
        width: 350,
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        overflow: "scroll",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: 650,
      }}
    >
      <div style={{ margin: 20 }}>
        <img
          src={product.coverImg}
          alt={product.name}
          width={"100%"}
          height={350}
          style={{
            objectFit: "cover",
            display: "block",
            maxWidth: 310,
          }}
        />
      </div>

      <div
        style={{
          padding: 16,
          display: "grid",
          gridTemplateRows: "1fr 3fr 1fr",
          alignItems: "center",
          justifyItems: "anchor-center",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          {product.name}
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#666",
            marginBottom: 12,
            lineHeight: 1.4,
            height: "100px",
            maxHeight: "100px",
            overflow: "scroll",
          }}
        >
          {product.description}
        </div>

        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          £{price}
        </div>
      </div>
    </div>
  );
};

const dummyProduct: Product = {
  id: "nv-tee-001",
  name: "North Vale Essential Tee",
  tag: "t-shirt",
  description:
    "A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.",
  coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
  position: 1,
  meta: [
    {
      stock: 120,
      size: "S",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
    {
      stock: 80,
      size: "M",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: true,
      discountedPrice: 28,
    },
    {
      stock: 65,
      size: "L",
      color: "White",
      imgs: [
        "/products/northvale-tee-white-front.jpg",
        "/products/northvale-tee-white-back.jpg",
        "/products/northvale-tee-white-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
  ],
};

const dummyProductTwo: Product = {
  id: "nv-tee-001",
  name: "North Vale Essential Tee",
  tag: "t-shirt",
  description: "A premium cotton everyday tee designed for comfort",
  coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
  position: 1,
  meta: [
    {
      stock: 120,
      size: "S",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
    {
      stock: 80,
      size: "M",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: true,
      discountedPrice: 28,
    },
    {
      stock: 65,
      size: "L",
      color: "White",
      imgs: [
        "/products/northvale-tee-white-front.jpg",
        "/products/northvale-tee-white-back.jpg",
        "/products/northvale-tee-white-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
  ],
};
