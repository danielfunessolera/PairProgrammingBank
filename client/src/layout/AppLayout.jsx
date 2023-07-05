import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components/';
import { useState } from 'react';

export const AppLayout = ({ children }) => {
    const [drawer, setDrawer] = useState(280);

    const handleSetDrawer = () => {
        setDrawer(drawer === 280 ? 0 : 280);
        console.log(drawer)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawer} handleSetDrawer={handleSetDrawer}/>

            <SideBar drawerWidth={drawer} />

            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
};