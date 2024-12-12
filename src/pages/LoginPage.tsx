import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Paper,
  CircularProgress,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff, Lock, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../app/redux/hooks/hooksRedux';
// import { LoginUsuario } from '../app/redux/actions/UsuarioActions/UsuarioActions';
import { loginEntity } from '../app/api/domain/entities/UserEntity/userEntity';
import { loginAction } from '../app/redux/actions/LoginAction';

// public\MacroVentaLogo.png
// C:\Users\AppDev\Documents\Repo\MacroVentasWeb\public\MacroVentaLogo.png

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [credential, setCredential] = useState<loginEntity>();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginState = useAppSelector((state) => state.loginUsuario);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    if (loginState?.data?.idUser) {
      localStorage.setItem('idUser', (loginState.data.idUser).toString());
      navigate('/private/Inicio');
    }
  }, [loginState, navigate]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredential((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await dispatch(loginAction(credential));
    setIsLoading(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #dfe9f3, #ffffff)',
      }}
    >
      <Paper
        elevation={16}
        sx={{
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
        }}
      >
        <Box textAlign="center" mb={3}>
          <img src="MacroVentaLogo.png" alt="MacroVenta Logo" width={180} />
          <Typography component="h1" variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
            Bienvenido a Macro Ventas
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Iniciar Sesión
          </Typography>
        </Box>

        <form>
          <TextField
            fullWidth
            name="correo"
            label="correo"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ backgroundColor: '#e0f2f1', borderRadius: '50%', padding: 0.5 }}>
                    <AccountCircle color="primary" />
                  </Box>
                </InputAdornment>
              ),
              sx: { borderRadius: 2, backgroundColor: '#f9fbfc' },
            }}
            value={credential?.correo}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            name="contrasenia"
            label="contrasenia"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ backgroundColor: '#e0f2f1', borderRadius: '50%', padding: 0.5 }}>
                    <Lock color="primary" />
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: { borderRadius: 2, backgroundColor: '#f9fbfc' },
            }}
            value={credential?.contrasenia}
            onChange={handleInputChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 3,
              borderRadius: 3,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #42a5f5, #21cbf3)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                background: 'linear-gradient(90deg, #21cbf3, #42a5f5)',
              },
            }}
            onClick={() => handleLogin()}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Lock />}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>

          {error && (
            <Box mt={2}>
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            </Box>
          )}
        </form>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 MacroVentas. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link href="/public/Terms" underline="hover">Términos y condiciones</Link> |{' '}
            <Link href="/public/Privacy" underline="hover">Política de privacidad</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
