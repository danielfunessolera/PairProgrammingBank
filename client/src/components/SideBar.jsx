import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SidebarItem } from "./";

export const SideBar = ({ drawerWidth = 280 }) => {

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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6">Hola</Typography>
        </Toolbar>

        <Divider />

        <List disablePadding>
          <SidebarItem />
        </List>
      </Drawer>
    </Box>
  );
};
