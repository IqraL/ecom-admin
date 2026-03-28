import React, { useState } from "react";

export const EmailInput = ({
  setEmail, setIsEmailValid, email,
}: {
  setEmail: (value: string) => void;
  setIsEmailValid: (value: boolean) => void;
  email: string | null;
}) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleBlur = () => {
    setFocused(false);
    if (!isValidEmail(email ?? "")) {
      setIsEmailValid(false);
      setError("Please enter a valid email");
    } else {
      setIsEmailValid(true);
      setError("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "100%",
      }}
    >
      <label
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#374151",
        }}
      >
        Email Address
      </label>

      <input
        type="email"
        value={email ?? ""}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        placeholder="you@example.com"
        style={{
          height: 44,
          borderRadius: 10,
          border: error
            ? "1px solid #ef4444"
            : focused
              ? "1px solid #111"
              : "1px solid #e5e7eb",
          padding: "0 14px",
          fontSize: 14,
          outline: "none",
          transition: "all 0.2s ease",
          backgroundColor: "#fff",
        }} />

      {error && (
        <span
          style={{
            fontSize: 12,
            color: "#ef4444",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};
