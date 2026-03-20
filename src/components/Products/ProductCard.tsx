import React, { useMemo } from "react";
import type { Product } from "../../SharedTypes";
import Button from "@mui/material/Button";

export const ProductCard = ({ product }: { product: Product }) => {
  const price = useMemo(() => {
    return product.meta[0]?.price;
  }, [product.meta]);

  return (
    <div
      style={{
        width: 550,
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        overflow: "scroll",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: 650,
      }}
    >
      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
        }}
        className="img_wrapper"
      >
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
          gridTemplateRows: "0fr 0fr 0fr 1fr",
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
            display: "flex",
            fontSize: 14,
            color: "#666",
            marginBottom: 12,
            height: "100px",
            maxHeight: "100px",
            overflow: "scroll",
            alignItems: "center",
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
        <div>
          <Button
            href={`/product?id=${product.id}`}
            color="primary"
            variant="contained"
          >
            view details
          </Button>
        </div>
      </div>
    </div>
  );
};
