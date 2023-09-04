import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Paper elevation={3} style={{ background: "#BDBDBD", color: "black" }}>
      <Box p={3} textAlign="center">
        <Typography variant="h4" component="div">
          Emart 🔥 Your Online Shopping Destination
        </Typography>
        <Typography variant="body2">
          Welcome to EMART, your premier online shopping destination where
          convenience meets quality. Discover a world of endless possibilities
          with our cutting-edge eCommerce platform, designed to provide you with
          a seamless and delightful shopping experience.
        </Typography>
        <Typography variant="body2">
          &copy;{currentYear} All rights reserved. Reliance Retail Ltd.
        </Typography>
      </Box>
    </Paper>
  );
};
