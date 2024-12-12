import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Tooltip, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/redux/hooks/hooksRedux';

interface HeaderProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setSidebar }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const nombreDeUsuario = localStorage.getItem("nombre");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Cierra el menú antes de hacer logout
    handleClose();

    // Limpiar localStorage y luego redirigir
    localStorage.clear()
    // dispatch(loginUsuarioSlice.actions.resetState())
    console.log("Sesión cerrada, redirigiendo..."); // Confirmación de depuración

    // Redirigir al usuario al inicio de sesión después de limpiar los datos
    setTimeout(() => {
      navigate('/public/IniciarSesion', { replace: true });
    }, 100); // Agrega un pequeño retraso si es necesario
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ backgroundColor: '#004080' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={() => setSidebar(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          NicoAssist
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title={`Bienvenido, ${nombreDeUsuario || 'Usuario'}`}>
            <IconButton color="inherit" onClick={handleMenu} sx={{ ml: 1 }}>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => navigate('/private/ActualizarContrasena')}>Actualizar Contraseña</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
