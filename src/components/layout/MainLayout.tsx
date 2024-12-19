
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
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
        <h4 style={{ width: '50%',textAlign: 'center' }}>MacroVentas</h4>
      </Toolbar>

      <List>
        <ListItemButton onClick={() => navigate('/create-client')}>
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Cliente" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/mostrar-client')}>
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Mostrar Cliente" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/create-product')}>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Producto" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/mostrar-product')}>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Mostrar Producto" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/create-venta')}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Crear Venta" />
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
