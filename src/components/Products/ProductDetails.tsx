import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { type TooltipProps, tooltipClasses } from "@mui/material/Tooltip";


export const AddToCartTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "red !important",
    color: "white !important",
    fontSize: "20px",
    border: "3px solid blue",
  },
}));


import { CartAction, type CartItem, type Product } from "../../SharedTypes";

const API_URL = import.meta.env.VITE_API_URL;

export const ProductDetails = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/products/get-by-id`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ productId }),
          credentials: "include",
        });
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log("fetchProduct error", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const variants = useMemo(() => {
    return product?.meta ?? [];
  }, [product?.meta]);

  const colors = useMemo(() => {
    const values = product?.meta.map((variant) => variant.color) ?? [];
    return [...new Set(values)];
  }, [product?.meta]);

  const sizes = useMemo(() => {
    const values = product?.meta.map((variant) => variant.size) ?? [];
    return [...new Set(values)];
  }, [product?.meta]);

  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes?.[0] || null
  );

  const [filteredProduct] = useMemo(() => {
    const filteredProduct = variants.find((productVariants) => {
      return (
        productVariants.size === selectedSize &&
        productVariants.color === selectedColor
      );
    });

    return [filteredProduct];
  }, [selectedColor, selectedSize, variants]);

  const cartItem = useMemo<CartItem | null>(() => {
    if (filteredProduct && product) {
      return {
        name: product.name,
        productId: product.id,
        ...filteredProduct,
        quantity: 1,
      };
    }
    return null;
  }, [filteredProduct, product]);

  const addToCart = useCallback(async () => {
    setAddedToCart(true);
    await fetch(`${API_URL}/cart/add`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ cartItem, cartAction: CartAction.ADD }),
      credentials: "include",
    });
    setAddedToCart(false);
  }, [cartItem]);

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
          src={filteredProduct?.imgs?.[0] ?? product?.coverImg}
          style={{
            width: "100%",
            maxWidth: 450,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 600 }}>{product?.name}</div>

        <div style={{ color: "#555", lineHeight: 1.6 }}>
          {product?.description}
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
              onClick={addToCart}
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
          {addedToCart && (
            <AddToCartTooltip title="Added to cart">
              <div
                style={{
                  fontSize: 14,
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: 6,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 500,
                  letterSpacing: 0.3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                Added to cart
              </div>
            </AddToCartTooltip>
          )}
        </div>
      </div>
    </div>
  );
};
