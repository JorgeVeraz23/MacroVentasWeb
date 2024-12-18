
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Drawer, List, ListItemIcon, ListItemText, Toolbar, Divider, ListItemButton } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const drawerWidth = 240;
const MainLayout = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
            <Toolbar>
        <h4 style={{ width: '50%',textAlign: 'center' }}>DynamicFormsApp</h4>
      </Toolbar>

      <List>
        <ListItemButton onClick={() => navigate('/form-page')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Formularios" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/filled-form-page')}>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Formularios Llenos" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/create-form-page')}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Formularios" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/create-form-group')}>
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Grupo Formularios" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/create-form-field')}>
          <ListItemIcon>
            <TextFieldsIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Campo" />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <CssBaseline />
    <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="menu options"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    <Box
  component="main"
  sx={{ 
    flexGrow: 1, 
    p: 3, 
    ml: `${drawerWidth}px`,
    pt: 8, 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    minHeight: 'calc(100vh - 128px)', 
    width: '100%'
  }}
>

      <Toolbar />
      <Outlet />
    </Box>
    <Footer />
  </Box>
  );
};

export default MainLayout;
