import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Paper,
  AppBar,
  Box,
  InputBase,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Appbar() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleMenuButtonClick = () => {
    // Display an alert when the menu button is clicked
    alert("Coming soon");
  };

  const handleSearchButtonClick = () => {
    // Toggle the search bar expansion on mobile screens
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <Paper elevation={12}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            color: "black",
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
          }}
          position="static"
        >
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleMenuButtonClick}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  EMART
                </Typography>
              </Grid>
              <Grid item xs={isMobileScreen ? 7 : 4}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    flex: 1,
                    border: "2px solid black",
                    borderRadius: "20px",
                    alignItems: "center",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Here !....."
                    inputProps={{ "aria-label": "Search" }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "5px 5px" }}
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Grid>
              {!isMobileScreen && (
                <>
                  <Grid item xs={2}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Badge badgeContent={0} color="error">
                          <ShoppingCartOutlinedIcon />
                        </Badge>
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}
