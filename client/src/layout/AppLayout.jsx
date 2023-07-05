import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components/';

const drawerWidth = 280;

export const AppLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
};