import {
  Avatar,
  Container,
  Drawer,
  Grid,
  List,
  Toolbar,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { SidebarItem } from "./";
import {
  AccountBalance,
  Home,
  Logout,
  Notifications,
  Person,
} from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const SideBar = ({ drawerWidth = 280 }) => {
  const { userName, email, balance } = {
    userName: "pochico",
    email: "Oleole@ole.com",
    balance: "1,681.37",
  };
  const { updateUser } = useContext(AuthContext);

  const pages = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "My Account",
      icon: <Person />,
    },
    {
      text: "Bank Accounts",
      icon: <AccountBalance />,
    },
    {
      text: "Notifications",
      icon: <Notifications />,
    },
  ];

  const logout = () => {
    localStorage.removeItem("user");
    updateUser(null);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { sm: "block" },
          transition: ".3s",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Container>
            <Avatar></Avatar>
          </Container>
          <Grid container direction="column">
            <Typography variant="h6">{userName}</Typography>
            <Typography variant="p">{email}</Typography>
          </Grid>
        </Toolbar>

        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary={`\$${balance}`}
                secondary="Account Balance"
              />
            </ListItemButton>
          </ListItem>
          <Grid container direction="column">
            {pages.map((page) => (
              <SidebarItem key={page.text} text={page.text} icon={page.icon} />
            ))}
          </Grid>
          <Container sx={{ mt: 2 }} />
          <ListItem>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
