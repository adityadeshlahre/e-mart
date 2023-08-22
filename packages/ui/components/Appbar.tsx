import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  ArrowDropDownOutlined,
  Search as SearchIcon,
} from "@mui/icons-material";

import {
  Paper,
  AppBar,
  Box,
  InputBase,
  Toolbar,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Badge,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import MenuButton from "@mui/joy/MenuButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import Menu from "@mui/joy/Menu";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Dropdown from "@mui/joy/Dropdown";

export function Appbar() {
  const [size, setSize] = useState("");

  const SIZES = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
  ];

  const handleLocationChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSize(event.target.value);
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
              sx={{ mr: 2 }}
            >
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                EMART
              </Typography>
            </IconButton>
            <div style={{ display: "flex", gap: "15px" }}>
              <Dropdown>
                <MenuButton endDecorator={<ArrowDropDown />}>
                  Location
                </MenuButton>
                <Menu
                  sx={{ minWidth: 160, "--ListItemDecorator-size": "24px" }}
                >
                  <ListItem>
                    <List aria-label="Font sizes">
                      {SIZES.map((item: string) => (
                        <MenuItem
                          key={item}
                          role="menuitemradio"
                          aria-checked={item === size ? "true" : "false"}
                          onClick={() => {
                            setSize(item);
                          }}
                        >
                          <ListItemDecorator>
                            {item === size && <ArrowRight />}
                          </ListItemDecorator>{" "}
                          {item}
                        </MenuItem>
                      ))}
                    </List>
                  </ListItem>
                </Menu>
              </Dropdown>
              <Box
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                  border: "2px solid black",
                  borderRadius: "20px",
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
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
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
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}
