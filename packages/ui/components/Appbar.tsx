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
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Sidebar } from "./Sidebar";

export function Appbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToPercentage = (percentage: number) => {
    const scrollPosition =
      (percentage / 100) * document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setSidebarOpen(false);
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
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" noWrap component="div">
                EMART
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginRight: "20px",
                flex: 1,
              }}
            >
              <InputBase
                sx={{
                  border: "2px solid black",
                  borderRadius: "20px",
                  paddingLeft: "10px",
                  width: "100%",
                }}
                placeholder="Search Here !....."
                inputProps={{ "aria-label": "Search" }}
              />
              <IconButton type="submit" sx={{ p: "5px" }} aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Box>
            {!isSmallScreen && (
              <>
                <div>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={0} color="error">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button variant="outlined">Get Started</Button>
                </div>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        scrollToPercentage={scrollToPercentage}
      />
    </Paper>
  );
}
