import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  CardActions,
  Divider
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppDispatch } from "redux/store";

import { useAppDispatch, useAppSelector } from "../../../redux/hooksRedux";

import { showAlertAsync } from "../../../components/CustomAlert";
import { createClienteSlice } from "../../../redux/slice/Cliente/CreateClienteSlice";
import CustomInput from "../../../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { CreateProductoEntity } from "data/Entity/ProductoEntity";
import { createProducto } from "../../../redux/action/ProductoAction";
import CustomSelect from "../../../components/CustomSelect";

import { selectorCategoria } from "../../../redux/action/SelectorAction";
import { createProductoSlice } from "../../../redux/slice/Producto/CreateProductoSlice";

const CreateProductoPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();





  const [optionCategoriaProductoSelected, setOptionCategoriaProductoSelected] = useState<{ value: string, label: string }>({
    value: '', label: ''
  });


  const CreateProductoState = useAppSelector(state => state.createProducto);
  const SelectorCategoriaProducto = useAppSelector(state => state.selectorCategoriaProducto)

  const [createProductoData, setCreateProductoData] = useState<CreateProductoEntity>({
    nombreProducto: '',
    codigoProducto: 0,
    stock: 0,
    precio: 0,
    idCategoriaProducto: 0
  });


  useEffect(() => {
    init();
  }, [])

  const init = async () => {
    await dispatch(selectorCategoria())
  }

  useEffect(() => {

    if (CreateProductoState?.loading === true) {
        showAlertAsync({
            title: 'Cargando',
            icon: 'info',
            html: CreateProductoState?.loading ? "Cargando..." : "Error",
        });
    } else if (CreateProductoState.error) {
        showAlertAsync({
            title: 'Error',
            icon: 'error',
            html: CreateProductoState?.error,
        });
        dispatch(createProductoSlice?.actions.resetState());
    } else if (CreateProductoState?.data?.success === true) {
        showAlertAsync({
            title: 'Éxito',
            icon: 'success',
            html: CreateProductoState?.data?.message,
        }).then(() => {
            resetForm();
            dispatch(createProductoSlice?.actions?.resetState());
        });
    }
}, [CreateProductoState, dispatch]);


const resetForm = () => {
    setCreateProductoData({
      nombreProducto: '',
      codigoProducto: 0,
      stock: 0,
      precio: 0,
      idCategoriaProducto: 0
    });
   setOptionCategoriaProductoSelected({value: '', label: ''})
};

  const handleSetData = (value: string, field: keyof CreateProductoEntity) => {
    setCreateProductoData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };


const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof CreateProductoEntity) => {
    setCreateProductoData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
    }));
};

const createRegister = () => {
    if (createProductoData.nombreProducto === '' ||
      createProductoData.codigoProducto === 0,
      createProductoData.stock === 0,
      createProductoData.precio === 0,
      createProductoData.idCategoriaProducto <= 0
    ) {
        showAlertAsync({
            title: 'Error',
            icon: 'error',
            html: 'Todos los campos son obligatorios',
        });

        console.log(createProductoData)
        return;
    }
    dispatch(createProducto(createProductoData));
};


const handleCategoriaProductoSelectChange = (option: { value: string, label: string }) => {
  setOptionCategoriaProductoSelected(option);
  handleSetData(option.value, 'idCategoriaProducto');
}





return (
    <Container sx={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Crear Producto
        </Typography>
  
        <Grid container spacing={2}>
          {/* Campo: Nombre */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Nombre
            </Typography>
            <CustomInput
              placeholder="Ingrese el nombre del producto"
              value={createProductoData.nombreProducto}
              onChange={(event) => handleInputChange(event, "nombreProducto")}
            />
          </Grid>
  
          {/* Campo: Cedula */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Codigo Producto
            </Typography>
            <CustomInput
              placeholder="Ingrese el nombre de la cedula"
              value={createProductoData.codigoProducto}
              onChange={(event) => handleInputChange(event, "codigoProducto")}
            />
          </Grid>
  
          {/* Campo: Dirección */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Precio
            </Typography>
            <CustomInput
              placeholder="Ingrese el nombre de la direccion"
              value={createProductoData.precio}
              onChange={(event) => handleInputChange(event, "precio")}
            />
          </Grid>
  
          {/* Campo: Telefono */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Stock
            </Typography>
            <CustomInput
              placeholder="Ingrese el telefono del cliente"
              value={createProductoData.stock}
              onChange={(event) => handleInputChange(event, "stock")}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Categoria
            </Typography>
            <CustomSelect
                                onChange={(option: { value: string, label: string }) => handleCategoriaProductoSelectChange(option)}
                                
                                value={optionCategoriaProductoSelected}
                                placeholder='Seleccione una categoria'
                                isRequired={true}
                                options={SelectorCategoriaProducto.data}
                              />
          </Grid>
  
          {/* Acciones */}
          <Grid item xs={12}>
            <Divider />
            <CardActions
              sx={{
                padding: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => navigate("/mostrar-product")}
                variant="outlined"
                color="primary"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  borderColor: "#004080",
                  color: "#004080",
                  "&:hover": {
                    backgroundColor: "#f0f4ff",
                    borderColor: "#003366",
                  },
                }}
              >
                Mostrar Productos
              </Button>
              <Button
                onClick={CreateProductoState.loading ? undefined : createRegister}
                variant="contained"
                sx={{
                  backgroundColor: "#004080",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  width: 150,
                  "&:hover": { backgroundColor: "#003366" },
                }}
                disabled={CreateProductoState.loading}
                endIcon={
                  CreateProductoState.loading && (
                    <CircularProgress size={20} color="inherit" />
                  )
                }
              >
                {CreateProductoState.loading ? "Guardando..." : "Guardar"}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CreateProductoPage;
