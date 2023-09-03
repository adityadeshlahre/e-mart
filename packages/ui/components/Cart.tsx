import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Chip,
  Box,
} from "@mui/material";

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { name: "Product 1", price: 104 },
    { name: "Product 2", price: 230 },
    { name: "Product 3", price: 2440 },
    { name: "Product 4", price: 230 },
    { name: "Product 5", price: 20 },
    { name: "Product 6", price: 220 },
    { name: "Product 7", price: 230 },
    { name: "Product 8", price: 250 },
  ]);

  // Function to remove an item from the cart
  const removeItemFromCart = (itemIndex: any) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCart);
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "0 auto" }}>
      <Box sx={{ gap: 1, justifyContent: "center" }}>
        <div>
          <TableContainer>
            <Table>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={`/images/${item.name}.jpg`}
                        alt={item.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {item.name}
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <IconButton
                        edge="end"
                        onClick={() => removeItemFromCart(index)}
                      >
                        <Chip
                          variant="filled"
                          color="error"
                          onClick={() => alert("Delete")}
                          label={
                            <Typography fontWeight="bold">Delete</Typography>
                          }
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
      <Typography variant="h6" align="right">
        Total Price: ${calculateTotalPrice()}
      </Typography>
      <Button variant="contained" color="success" size="large" fullWidth>
        <Typography fontWeight="bold">Checkout</Typography>
      </Button>
    </Paper>
  );
}
