import React from "react";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SidebarItem = ({ text, icon, navigate }) => {
  const navigator = useNavigate();
  return (
    <ListItem>
      <ListItemButton onClick={() => navigator(navigate)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
