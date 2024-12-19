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
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "redux/store";
import { createFormFieldAction } from "../../../redux/action/FormFieldAction";
import Swal from "sweetalert2";
import Autocomplete from '@mui/material/Autocomplete';
import { FormFieldEntity } from "data/Entity/FormFieldEntity";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import { getFileTypeSelectorAction } from "../../../redux/action/FieldTypeAction";
import { getFormGroupSelectorAction } from "../../../redux/action/FormGroupAction";
import { useAppSelector } from "../../../redux/hooksRedux";
import { createCliente } from "../../../redux/action/ClienteAction";


import { CreateClienteEntity } from "data/Entity/ClienteEntity";
import { showAlertAsync } from "../../../components/CustomAlert";
import { createClienteSlice } from "../../../redux/slice/Cliente/CreateClienteSlice";
import CustomInput from "../../../components/CustomInput";
import { useNavigate } from "react-router-dom";

const CreateClientePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownOptions, setDropdownOptions] = useState<{ idOption: number, name: string }[]>([]);
  const [newOption, setNewOption] = useState<string>("");


  const [error, setError] = useState(false);

  const { formFields, loading } = useSelector((state: RootState) => state.formField);

  const CreateClienteState = useAppSelector(state => state.createCliente);

  const [createClienteData, setCreateClienteData] = useState<CreateClienteEntity>({
     nombreCliente: '',
     cedula: '',
     telefono: '',
     direccion: '', 
  });

  useEffect(() => {
    if (CreateClienteState?.loading === true) {
        showAlertAsync({
            title: 'Cargando',
            icon: 'info',
            html: CreateClienteState.loading ? "Cargando..." : "Error",
        });
         dispatch(createClienteSlice.actions.resetState());
    } else if (CreateClienteState.error) {
        showAlertAsync({
            title: 'Error',
            icon: 'error',
            html: CreateClienteState.error,
        });
        dispatch(createClienteSlice.actions.resetState());
    } else if (CreateClienteState.data.success === true) {
        showAlertAsync({
            title: 'Éxito',
            icon: 'success',
            html: CreateClienteState?.data?.message,
        }).then(() => {
            resetForm();
            dispatch(createClienteSlice.actions.resetState());
        });
    }
}, [CreateClienteState, dispatch]);


const resetForm = () => {
    setCreateClienteData({
        nombreCliente: '',
        cedula: '',
        telefono: '',
        direccion: '', 
    });
};




const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof CreateClienteEntity) => {
    setCreateClienteData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
    }));
};

const createRegister = () => {
    if (createClienteData.nombreCliente === '' ||
        createClienteData.cedula === '',
        createClienteData.direccion === '',
        createClienteData.telefono === ''
    ) {
        showAlertAsync({
            title: 'Error',
            icon: 'error',
            html: 'Todos los campos son obligatorios',
        });

        console.log(createClienteData)
        return;
    }
    dispatch(createCliente(createClienteData));
};




return (
    <Container sx={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Crear Campo de Formulario
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
              placeholder="Ingrese el nombre del cliente"
              value={createClienteData.nombreCliente}
              onChange={(event) => handleInputChange(event, "nombreCliente")}
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
              Cedula
            </Typography>
            <CustomInput
              placeholder="Ingrese el nombre de la cedula"
              value={createClienteData.cedula}
              onChange={(event) => handleInputChange(event, "cedula")}
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
              Dirección
            </Typography>
            <CustomInput
              placeholder="Ingrese el nombre de la direccion"
              value={createClienteData.direccion}
              onChange={(event) => handleInputChange(event, "direccion")}
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
              Telefono
            </Typography>
            <CustomInput
              placeholder="Ingrese el telefono del cliente"
              value={createClienteData.telefono}
              onChange={(event) => handleInputChange(event, "telefono")}
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
                onClick={() => navigate("/mostrar-client")}
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
                Mostrar Clientes
              </Button>
              <Button
                onClick={CreateClienteState.loading ? undefined : createRegister}
                variant="contained"
                sx={{
                  backgroundColor: "#004080",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  width: 150,
                  "&:hover": { backgroundColor: "#003366" },
                }}
                disabled={CreateClienteState.loading}
                endIcon={
                  CreateClienteState.loading && (
                    <CircularProgress size={20} color="inherit" />
                  )
                }
              >
                {CreateClienteState.loading ? "Guardando..." : "Guardar"}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CreateClientePage;
