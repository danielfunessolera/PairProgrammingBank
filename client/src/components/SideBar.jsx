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
  Logout,
  Person,
} from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const SideBar = ({ drawerWidth = 280 }) => {

  const {firstName, lastName, userName} = useContext(AuthContext);
  // const { userName, email, balance } = {
  //   userName: "pochico",
  //   email: "Oleole@ole.com",
  //   balance: "1,681.37",
  // };
  const balance = "1,322.32";

  const { updateUser } = useContext(AuthContext);

  const pages = [
    {
      text: "My Account",
      icon: <Person />,
    },
    {
      text: "Bank Accounts",
      icon: <AccountBalance />,
    }
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
            <Typography variant="h6">{firstName} {lastName}</Typography>
            <Typography variant="p">{userName}</Typography>
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
