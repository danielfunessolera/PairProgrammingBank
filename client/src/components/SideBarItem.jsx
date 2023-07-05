import React from 'react';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const SidebarItem = () => {

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <Grid container direction='column'>
                    <ListItemText primary="A" />
                    <ListItemText secondary="b" />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};