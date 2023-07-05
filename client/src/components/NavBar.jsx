import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = ({ drawerWidth = 280 }) => {

    const onLogout = () => {
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton sx={{ display: { sm: 'none' } }}>
                    {/* <Menu sx={{ color: 'white' }} /> */}
                </IconButton>

                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography noWrap component="div">
                        Journal App
                    </Typography>

                    <IconButton onClick={onLogout}>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};