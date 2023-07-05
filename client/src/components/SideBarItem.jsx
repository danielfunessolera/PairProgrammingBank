import React from "react";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const SidebarItem = ({ text, icon }) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
