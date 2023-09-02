import { Cart } from "ui";
import { Typography } from "@mui/material";

export default function UserCart() {
  return (
    <>
      <div style={{ maxWidth: "600px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3">Your Cart</Typography>
        </div>
        <Cart />
      </div>
    </>
  );
}
