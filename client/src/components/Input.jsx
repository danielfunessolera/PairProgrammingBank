import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({id, label, name, minLength, maxLength, onChange}) => {
  return (
    <TextField id={id} label={label} type='text' variant="outlined" name={name} required sx={{marginBottom: "1rem", width: "100%"}} onChange={onChange} minLength={minLength} maxLength={maxLength}/>
  )
}

export default Input

// <SideBar drawerWidth={drawerWidth} />

// import { Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import { useSelector } from 'react-redux';
// import { SidebarItem } from './';

// export const SideBar = ({ drawerWidth = 280 }) => {
//     const { displayName, photoURL } = useSelector((state) => state.auth);
//     const { notes } = useSelector((state) => state.journal);

//     return (
//         <Box
//             component="nav"
//             sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         >
//             <Drawer
//                 variant="permanent"
//                 open
//                 sx={{
//                     display: { sm: 'block' },
//                     '& .MuiDrawer-paper': {
//                         boxSizing: 'border-box',
//                         width: drawerWidth,
//                     },
//                 }}
//             >
//                 <Toolbar>
//                     <Typography variant="h6">{displayName}</Typography>
//                 </Toolbar>

//                 <Divider />

//                 <List disablePadding>
//                     {notes.map((note) => (
//                         <SidebarItem key={note.id} {...note} />
//                     ))}
//                 </List>
//             </Drawer>
//         </Box>
//     );
// };