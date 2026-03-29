import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { CartItem, OrderDocument } from "../../SharedTypes";

const API_URL = import.meta.env.VITE_API_URL;

export const SuccessOrderPage = () => {
  const [order, setOrder] = useState<OrderDocument | null>(null);
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const email = searchParams.get("email");

  const cartItems = useMemo(() => order?.cartItems || [], [order?.cartItems]);
  const total = cartItems.reduce((acc: number, item: CartItem) => {
    const priceToUse = item.discounted
      ? item.discountedPrice ?? item.price
      : item.price;

    return acc + priceToUse * item.quantity;
  }, 0);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(`${API_URL}/checkout/get-order`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify({
          orderId,
          email,
        }),
        credentials: "include",
      });

      const orderDoc = await response.json();
      setOrder(orderDoc);
    };
    fetchOrder();
  }, [email, orderId]);

  // return (
  //   <div
  //     style={{
  //       display: "grid",
  //       gridTemplateColumns: "1fr 5fr 1fr",
  //     }}
  //   >
  //     <div></div>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //       }}
  //     >
  //       {cartItems.map((cartItem)=>{
  //         return <div></div>
  //       })}
  //     </div>
  //     <div></div>
  //   </div>
  // );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* 🎉 Success Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ fontSize: "50px", marginBottom: "10px" }}>✅</div>
        <h1 style={{ margin: "0 0 10px 0", color: "#1a1a1a" }}>
          Thank you for your order!
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          We've sent a confirmation email to <strong>{email}</strong>
        </p>
      </div>

      {/* 🧾 Order Info Card */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          border: "1px solid #eee",
        }}
      >
        <div>
          <span
            style={{
              color: "#666",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Order ID
          </span>
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            #{orderId}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span
            style={{
              color: "#666",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Status
          </span>
          <div style={{ color: "#2f855a", fontWeight: "bold" }}>Confirmed</div>
        </div>
      </div>

      {/* 📦 Items List */}
      <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {cartItems.map((item) => (
          <div
            key={`${item.productId}-${item.variantId}`}
            style={{
              display: "flex",
              gap: "20px",
              padding: "15px 0",
              borderBottom: "1px solid #f0f0f0",
              alignItems: "center",
            }}
          >
            <img
              src={item.imgs[0]}
              alt={item.name}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
              }}
            />

            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>
                {item.name}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#888", margin: 0 }}>
                {item.size} • {item.color} • Qty: {item.quantity}
              </p>
            </div>

            <div style={{ textAlign: "right", fontWeight: "600" }}>
              {item.discounted ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#e53e3e" }}>
                    £{item.discountedPrice}
                  </span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#bbb",
                      fontSize: "0.8rem",
                    }}
                  >
                    £{item.price}
                  </span>
                </div>
              ) : (
                `£${item.price}`
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Total Section */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px 0",
          borderTop: "2px solid #1a1a1a",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          <span>Total Paid</span>
          <span>£{total.toFixed(2)}</span>
        </div>
      </div>

      {/* 🏠 CTA */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
