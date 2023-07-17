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
import { AccountBalance, Logout, Person } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import getTotalSavings from "../services/getTotalSavings";

export const SideBar = ({ drawerWidth = 280 }) => {
  const navigate = useNavigate();
  const [TotalSavings, setTotalSavings] = useState(0);

  const { updateIsLogged } = useContext(AuthContext);
  const { userContext } = useContext(UserContext);

  const pages = [
    {
      text: "My Account",
      icon: <Person />,
      navigate: "/user",
    },
    {
      text: "Bank Accounts",
      icon: <AccountBalance />,
      navigate: "/bankaccount",
    },
  ];

  const logout = () => {
    localStorage.removeItem("id");
    updateIsLogged(false);
    navigate("/auth/signup");
  };

  useEffect(() => {
    const fetchTotalSavings = async () => {
      setTotalSavings(await getTotalSavings(localStorage.getItem("id")));
    };
    fetchTotalSavings();
  }, []);

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
          <Grid container direction={"row"} wrap="nowrap" alignItems={"center"}>
            <Grid container width={"40%"}>
              <Avatar></Avatar>
            </Grid>
            <Grid container direction="column">
              <Typography variant="h6">{userContext.userName}</Typography>
              <Typography variant="p">
                {userContext.firstName} {userContext.lastName}
              </Typography>
              {userContext.email && (
                <Typography variant="p">{userContext.email}</Typography>
              )}
            </Grid>
          </Grid>
        </Toolbar>

        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary={`\$${TotalSavings}`}
                secondary="Account Balance"
              />
            </ListItemButton>
          </ListItem>
          <Grid container direction="column">
            {pages.map((page) => (
              <SidebarItem key={page.text} text={page.text} icon={page.icon} navigate={page.navigate}/>
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

// const getTotalSavings = cuentas.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
