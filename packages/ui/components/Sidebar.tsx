import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  scrollToPercentage: (percentage: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  scrollToPercentage,
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div
        style={{ padding: "20px" }}
        role="presentation"
        onClick={onClose} // Close the sidebar when clicking outside
      >
        <Typography variant="h3" fontWeight={"bold"}>
          {" "}
          Emart
        </Typography>
        <hr color="2px solid black" />
        <Typography variant="h5" fontWeight={"bold"}>
          Shop By Category
        </Typography>
        <hr color="2px solid black" />
        <List>
          <ListItemButton onClick={() => scrollToPercentage(20)}>
            <ListItemText primary="Category 1 (20%)" />
          </ListItemButton>
          <ListItemButton onClick={() => scrollToPercentage(40)}>
            <ListItemText primary="Category 2 (40%)" />
          </ListItemButton>
          <ListItemButton onClick={() => scrollToPercentage(60)}>
            <ListItemText primary="Category 3 (60%)" />
          </ListItemButton>
          <ListItemButton onClick={() => scrollToPercentage(80)}>
            <ListItemText primary="Category 4 (80%)" />
          </ListItemButton>
        </List>
      </div>
    </Drawer>
  );
};
