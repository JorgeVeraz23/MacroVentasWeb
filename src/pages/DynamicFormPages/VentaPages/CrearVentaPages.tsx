import React, { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../redux/hooksRedux";
import { useNavigate } from "react-router-dom";
import { getProductoById, selectorProducto } from "../../../redux/action/ProductoAction";
import { selectorCliente } from "../../../redux/action/ClienteAction";
import { selectorUsuario } from "../../../redux/action/UsuarioAction";
import { CreateVenta, VentaDetalle } from "data/Entity/VentaEntity";
import { showAlertAsync } from "../../../components/CustomAlert";
import { createVentaSlice } from "../../../redux/slice/Venta/CreateVentaSlice";
import CustomSelect from "../../../components/CustomSelect";
import { ProductoDataEntity } from "data/Entity/ProductoEntity";

const CreateVentaPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectorUsuarioState = useAppSelector(state => state.selectorUsuario);
  const selectorClienteState = useAppSelector(state => state.selectorCliente);
  const selectorProdutoState = useAppSelector(state => state.selectorProducto);
  const obtenerProductoByIdState = useAppSelector(state => state.getProducto)

  const createVentaState = useAppSelector(state => state.createVenta);


  const [ventaData, setVentaData] = useState<CreateVenta>({
    idVentas: 0,
    idCliente: 0,
    userId: 0,
    ventaDetalles: [],
  });

  const [ventaDetalle, setVentaDetalle] = useState<VentaDetalle>({
    idVentaDetalle: 0,
    cantidad: 0,
    subTotal: 0,
    idProducto: 0,
    idVentas: 0,
  });

    const [usuarioSelected, setUsuarioSelected] = useState<{ value: string, label: string }>({
      value: '', label: ''
    });

    const [productoSelected, setProductoSelected] = useState<{ value: string, label: string }>({
      value: '', label: ''
    });

    const [clienteSelected, setClienteSelected] = useState<{ value: string, label: string }>({
      value: '', label: ''
    });

    const [productoData, setProductoData] = useState<ProductoDataEntity>({
      precio: 0,
      stock: 0,
      subtotal: 0,
    })
  


  useEffect(() => {
    init();
  }, [])


  const init = async () => {
    await dispatch(selectorProducto())
    await dispatch(selectorCliente())
    await dispatch(selectorUsuario())
  }

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

  useEffect( () => {
    if(productoSelected){
      dispatch(getProductoById(Number(productoSelected.value)))
    }
  }, [productoSelected])

  useEffect(() => {
    if(obtenerProductoByIdState.data){
      setProductoData({
        stock: obtenerProductoByIdState.data.stock,
        precio: obtenerProductoByIdState.data.precio,
        subtotal: obtenerProductoByIdState.data.precio * ventaDetalle.cantidad,
      })
    }
  }, [obtenerProductoByIdState.data])

  // const addDetalle = async () => {
  //   if (ventaDetalle.cantidad > 0 && ventaDetalle.idProducto > 0) {
  //     console.log("venta detalle en add detalle",ventaDetalle.cantidad)
  //     console.log("producto en add detalle",ventaDetalle.idProducto)
  //     await dispatch(getProductoById(ventaDetalle.idProducto))
  //     setVentaData((prev) => ({
  //       ...prev,
  //       ventaDetalles: [...prev.ventaDetalles, ventaDetalle],
  //     }));
  //     setVentaDetalle({
  //       idVentaDetalle: 0,
  //       cantidad: 0,
  //       subTotal: 0,
  //       idProducto: 0,
  //       idVentas: 0,
  //     });
  //   } else {
  //     console.log("venta detalle en add detalle",ventaDetalle.cantidad)
  //     console.log("producto en add detalle",ventaDetalle.idProducto)
  //     alert("Por favor complete todos los campos del detalle correctamente.");
  //   }
  // };


  const addDetalle = async () => {
    if (ventaDetalle.cantidad > 0 && ventaDetalle.idProducto > 0) {
      // Obtén el producto para calcular el subtotal

      await dispatch(getProductoById(ventaDetalle.idProducto))

      const producto = obtenerProductoByIdState?.data
  
      if (!producto) {
        alert("Producto no encontrado.");
        return;
      }
  
      // Calcula el subtotal basado en la cantidad y el precio del producto
      const subtotal = producto.precio * ventaDetalle.cantidad;
  
      // Crea una copia del detalle con el subtotal calculado
      const detalleConSubtotal = {
        ...ventaDetalle,
        subTotal: subtotal,
      };
  
      // Agrega el detalle a la lista de detalles en ventaData
      setVentaData((prev) => ({
        ...prev,
        ventaDetalles: [...prev.ventaDetalles, detalleConSubtotal],
      }));
  
      // Reinicia los campos de detalle
      setVentaDetalle({
        idVentaDetalle: 0,
        cantidad: 0,
        subTotal: 0,
        idProducto: 0,
        idVentas: 0,
      });
  
      // Reinicia la selección del producto
      setProductoSelected({ value: '', label: '' });
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

    const handleSetData = (value: string, field: keyof CreateVenta) => {
      setVentaData((prevData) => ({
        ...prevData,
        [field]: value
      }));
    };
  
    const handleSetDetallleData = (value: string, field: keyof VentaDetalle) => {
      setVentaDetalle((prevData) => ({
        ...prevData,
        [field]: value
      }));
    };


const handleClienteSelectChange = (option: { value: string, label: string }) => {
  setClienteSelected(option);
  handleSetData(option.value, 'idCliente');
}

const handleUsuarioSelectChange = (option: { value: string, label: string }) => {
  setClienteSelected(option);
  handleSetData(option.value, 'userId');
}

const handleProductoSelectChange = (option: { value: string, label: string }) => {
  setProductoSelected(option);
  handleSetDetallleData(option.value, 'idProducto')
  // setVentaData((prev) => ({
  //   ...prev,
  //   ventaDetalles: [...prev.ventaDetalles, ventaDetalle],
  // }));
}

 


  useEffect(() => {

    if (createVentaState?.loading === true) {
        showAlertAsync({
            title: 'Cargando',
            icon: 'info',
            html: createVentaState?.loading ? "Cargando..." : "Error",
        });
    } else if (createVentaState.error) {
        showAlertAsync({
            title: 'Error',
            icon: 'error',
            html: createVentaState?.error,
        });
        dispatch(createVentaSlice?.actions.resetState());
    } else if (createVentaState?.data?.success === true) {
        showAlertAsync({
            title: 'Éxito',
            icon: 'success',
            html: createVentaState?.data?.message,
        }).then(() => {
            resetForm();
            dispatch(createVentaSlice?.actions?.resetState());
        });
    }
}, [createVentaState, dispatch]);

const resetForm = () => {
  setVentaData({
    idVentas: 0,
    idCliente: 0,
    userId: 0,
    ventaDetalles: [],
  });
 setProductoSelected({value: '', label: ''})
 setClienteSelected({value: '', label: ''})
 setUsuarioSelected({value: '', label: ''})
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
              Cliente
            </Typography>
            <CustomSelect
                                            onChange={(option: { value: string, label: string }) => handleClienteSelectChange(option)}
                                            
                                            value={clienteSelected}
                                            placeholder='Seleccione un cliente'
                                            isRequired={true}
                                            options={selectorClienteState?.data}
                                          />
          </Grid>

          {/* Usuario */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Usuario
            </Typography>
            <CustomSelect
                                            onChange={(option: { value: string, label: string }) => handleUsuarioSelectChange(option)}
                                            
                                            value={usuarioSelected}
                                            placeholder='Seleccione un usuario'
                                            isRequired={true}
                                            options={selectorUsuarioState?.data}
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
              Producto
            </Typography>
            <CustomSelect
                                            onChange={(option: { value: string, label: string }) => handleProductoSelectChange(option)}
                                            
                                            value={productoSelected}
                                            placeholder='Seleccione una categoria'
                                            isRequired={true}
                                            options={selectorProdutoState?.data}
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
                primary={`Producto ID: ${detalle.idProducto}, Cantidad: ${detalle.cantidad}, SubTotal: ${productoData.subtotal}`}
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
