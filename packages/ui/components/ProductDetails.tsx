import { Card, Grid, Typography, Paper, Button } from "@mui/material";
import { Container, flexbox } from "@mui/system";
import { ProductCatalog } from "./ProductCatalog";

export function ProductDetails() {
  const items = [
    {
      name: "Product 1",
      price: 100,
      mrp: 120,
      image: "https://cdn-0.generatormix.com/images/clothing/dress.jpg",
      discription: "loramispum 32 wefjkh 234hkh uoih234uih uihuih423uh uiuih43",
    },
  ];

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Card>
          {items.map((items) => (
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
              }}
            >
              <img
                src={`${items.image}`}
                alt={items.name}
                style={{
                  maxWidth: "100wh",
                  maxHeight: "100vh",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">{items.name}</Typography>
              <Typography variant="h6">{items.discription}</Typography>
              <Typography variant="subtitle1" color="primary">
                Emart Price ${items.price}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textDecoration: "line-through" }}
              >
                MRP ${items.mrp}
              </Typography>
              <Button variant="outlined" color="primary">
                Buy Now
              </Button>
              <br />
              <Button variant="contained" color="success">
                Add to Cart
              </Button>
            </Paper>
          ))}
        </Card>
      </div>
    </>
  );
}
