import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";

export function ProductCatalog() {
  const items = [
    {
      name: "Product 1",
      price: 100,
      mrp: 120,
      image: "https://cdn-0.generatormix.com/images/clothing/dress.jpg",
    },
    {
      name: "Product 2",
      price: 200,
      mrp: 250,
      image: "https://cdn-0.generatormix.com/images/clothing/sunglasses.jpg",
    },
    {
      name: "Product 2",
      price: 200,
      mrp: 250,
      image: "https://cdn-0.generatormix.com/images/clothing/jumper.jpg",
    },
    {
      name: "Product 2",
      price: 200,
      mrp: 250,
      image: "https://cdn-0.generatormix.com/images/clothing/knickers.jpg",
    },
    {
      name: "Product 2",
      price: 200,
      mrp: 250,
      image: "https://cdn-0.generatormix.com/images/clothing/sarong.jpg",
    },
  ];

  return (
    <>
      <div style={{ margin: "10px", padding: "20px" }}>
        <div style={{ padding: "10px", overflowX: "auto" }}>
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper
                  elevation={3}
                  style={{ padding: "16px", textAlign: "center" }}
                >
                  <img
                    src={`${item.image}`}
                    alt={item.name}
                    style={{
                      maxWidth: "60%",
                      maxHeight: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1" color="primary">
                    Emart Price ${item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "line-through" }}
                  >
                    MRP ${item.mrp}
                  </Typography>
                  <Button variant="outlined" color="primary">
                    Details
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
