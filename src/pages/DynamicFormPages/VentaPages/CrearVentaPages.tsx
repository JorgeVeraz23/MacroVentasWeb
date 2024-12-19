import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Divider,
  CardActions,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateVentaPage: React.FC = () => {
  const [ventaData, setVentaData] = useState({
    idVentas: 0,
    idCliente: 0,
    userId: 0,
    ventaDetalles: [],
  });

  const [ventaDetalle, setVentaDetalle] = useState({
    idVentaDetalle: 0,
    cantidad: 0,
    subTotal: 0,
    idProducto: 0,
    idVentas: 0,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>,
    field: string
  ) => {
    setVentaData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDetalleChange = (
    event: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>,
    field: string
  ) => {
    setVentaDetalle((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const addDetalle = () => {
    if (ventaDetalle.cantidad > 0 && ventaDetalle.idProducto > 0) {
      setVentaData((prev) => ({
        ...prev,
        ventaDetalles: [...prev.ventaDetalles, ventaDetalle],
      }));
      setVentaDetalle({
        idVentaDetalle: 0,
        cantidad: 0,
        subTotal: 0,
        idProducto: 0,
        idVentas: 0,
      });
    } else {
      alert("Por favor complete todos los campos del detalle correctamente.");
    }
  };

  const removeDetalle = (index: number) => {
    setVentaData((prev) => ({
      ...prev,
      ventaDetalles: prev.ventaDetalles.filter((_, i) => i !== index),
    }));
  };

  const saveVenta = () => {
    console.log("Venta Data: ", ventaData);
    alert("Venta registrada exitosamente");
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Crear Nueva Venta
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          {/* Cliente */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              ID del Cliente
            </Typography>
            <TextField
              fullWidth
              placeholder="Ingrese el ID del cliente"
              value={ventaData.idCliente}
              onChange={(e) => handleInputChange(e, "idCliente")}
              type="number"
            />
          </Grid>

          {/* Usuario */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              ID del Usuario
            </Typography>
            <TextField
              fullWidth
              placeholder="Ingrese el ID del usuario"
              value={ventaData.userId}
              onChange={(e) => handleInputChange(e, "userId")}
              type="number"
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Detalles de la Venta
        </Typography>

        <Grid container spacing={3}>
          {/* Producto */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              ID del Producto
            </Typography>
            <TextField
              fullWidth
              placeholder="Ingrese el ID del producto"
              value={ventaDetalle.idProducto}
              onChange={(e) => handleDetalleChange(e, "idProducto")}
              type="number"
            />
          </Grid>

          {/* Cantidad */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Cantidad
            </Typography>
            <TextField
              fullWidth
              placeholder="Cantidad"
              value={ventaDetalle.cantidad}
              onChange={(e) => handleDetalleChange(e, "cantidad")}
              type="number"
            />
          </Grid>

          {/* SubTotal */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              SubTotal
            </Typography>
            <TextField
              fullWidth
              placeholder="SubTotal (automático)"
              value={ventaDetalle.subTotal}
              onChange={(e) => handleDetalleChange(e, "subTotal")}
              type="number"
              disabled
            />
          </Grid>

          {/* Botón agregar detalle */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleIcon />}
              fullWidth
              onClick={addDetalle}
            >
              Agregar Detalle
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Lista de detalles */}
        <Typography variant="h6" gutterBottom>
          Lista de Detalles
        </Typography>
        <List>
          {ventaData.ventaDetalles.map((detalle, index) => (
            <ListItem key={index} sx={{ backgroundColor: "#f9f9f9", mb: 1 }}>
              <ListItemText
                primary={`Producto ID: ${detalle.idProducto}, Cantidad: ${detalle.cantidad}, SubTotal: ${detalle.subTotal}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => removeDetalle(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Acciones */}
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => alert("Volviendo...")}
          >
            Volver
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={saveVenta}
            startIcon={
              ventaData.ventaDetalles.length === 0 && <CircularProgress size={20} />
            }
            disabled={ventaData.ventaDetalles.length === 0}
          >
            Guardar Venta
          </Button>
        </CardActions>
      </Paper>
    </Container>
  );
};

export default CreateVentaPage;
