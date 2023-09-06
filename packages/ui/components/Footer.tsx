import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Paper elevation={12} style={{ background: "#F5F5F5" }}>
      <Box
        p={3}
        textAlign="center"
        style={{
          color: "black",
          maxWidth: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="div">
          Emart 🔥 Your Online Shopping Destination
        </Typography>
        <Typography variant="h2" fontWeight={"bold"}>
          Welcome to EMART
        </Typography>
        <Typography variant="h6">
          your premier online shopping destination where convenience meets
          quality. Discover a world of endless possibilities with our
          cutting-edge eCommerce platform, designed to provide you with a
          seamless and delightful shopping experience.
        </Typography>
        <Typography variant="body2">
          &copy;{currentYear} All rights reserved. Reliance Retail Ltd.
        </Typography>
      </Box>
    </Paper>
  );
};
