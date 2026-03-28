import type React from "react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const TotalRow = ({
  total,
  isEmailValid,
  email,
}: {
  total: number;
  isEmailValid: boolean;
  email: string;
}) => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(`${API_URL}/checkout/create-session`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email,
          }),
          credentials: "include",
        });

        const { url } = await response.json();

        setUrl(url);
      } catch (error) {
        console.log("error", error);
        setUrl(null);
      }
    };

    fetchUrl();
  }, [email]);

  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gridColumnGap: "20px",
          width: "100%",
          paddingTop: "10px",
          borderTop: "2px solid #e5e5e5",

          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "black",

          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>Total: </div>
        <div>£{total}</div>
        <div></div>
        <div>
          {total ? (
            <Button
              disabled={!isEmailValid}
              variant="contained"
              onClick={() => {
                window.location.href = url ?? "";
              }}
            >
              Checkout
            </Button>
          ) : null}
          {!isEmailValid ? "please input email" : null}
        </div>
      </div>
    </div>
  );
};
