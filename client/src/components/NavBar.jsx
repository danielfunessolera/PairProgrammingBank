import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth = 280, handleSetDrawer}) => {
    

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton onClick={handleSetDrawer}>
          <Menu sx={{ color: "white" }} />
        </IconButton>

        <Grid container justifyContent="space-between" alignItems="center">
          <Typography noWrap component="div">
            Bankinter
          </Typography>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
