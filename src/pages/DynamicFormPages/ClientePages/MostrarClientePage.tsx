

import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, Card, CardContent, IconButton, Button, 
  Tooltip, Box, Typography, Divider, TextField,
  Container
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



import { useNavigate } from "react-router-dom";
import { deleteCliente, editCliente, getAllCliente, getClienteById } from "../../../redux/action/ClienteAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooksRedux";
import { EditarClienteEntity } from "data/Entity/ClienteEntity";
import EditClienteModal from "./EditClienteModal";
import { StyledTableCell, StyledTableRow } from "../../../components/styles";
import { showAlertAsync } from "../../../components/CustomAlert";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { getClienteSlice } from "../../../redux/slice/Cliente/GetClienteByIdSlice";
import { deleteClienteSlice } from "../../../redux/slice/Cliente/DeleteClienteSlice";
import { editClienteSlice } from "../../../redux/slice/Cliente/EditClienteSlice";

const MostrarClientePage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState<number>(0);
    const rowsPerPage = 5;

    

    const mostrarClienteState = useAppSelector(state => state.getAllCliente);
    const editarClienteState = useAppSelector(state => state.editCliente);
    const eliminarClienteState = useAppSelector(state => state.deleteCliente);
    const obtenerClienteState = useAppSelector(state => state.getCliente);


    const [editClienteData, setClienteData] = useState<EditarClienteEntity>({
        idCliente: 0,
        nombreCliente: '',
        cedula: '',
        direccion: '',
        telefono: '',
    })

    useEffect(() => {
        init();
    }, [])



    const init = async () => {
       await dispatch(getAllCliente())
    }

    

    const handleRedirectToCreate = () => {
        navigate("/create-client");
      };


      
  const confirmDelete = (id: number) => {
    showAlertAsync({
      title: 'Advertencia',
      icon: 'warning',
      html: '¿Estás seguro de que quieres eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Sí, seguro',
      onConfirm: () => deleteRegister(id),
    });
  };

  const deleteRegister = (id: number) => {
    dispatch(deleteCliente(id));
  };

  
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    dispatch(getClienteSlice.actions.resetState());
  };



     // Manejo de clic en "Editar"
     const getById = async (id: number) => {
        if (!loading) {
            setLoading(true);
            await dispatch(getClienteById(id)).finally(() => setLoading(false));
        }
    };


    const handleChangePage = (newPage: number) => {
        setPage(newPage);
      };

          // Manejo de cambios en los campos del formulario de edición
          const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
            const value = event.target.value;
            setClienteData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        };
    

        
  useEffect(() => {
    if (eliminarClienteState?.data) {
      showAlertAsync({
        title: 'Éxito',
        icon: 'success',
        html: 'Registro eliminado con éxito',
      });
      dispatch(getAllCliente());
      dispatch(deleteClienteSlice?.actions?.resetState());
    } else if (eliminarClienteState?.error) {
      showAlertAsync({
        title: 'Error',
        icon: 'error',
        html: eliminarClienteState?.error,
      });
      dispatch(deleteClienteSlice?.actions?.resetState());
    }
  }, [eliminarClienteState, dispatch]);

  useEffect(() => {
    if(obtenerClienteState?.data){
      setClienteData(obtenerClienteState?.data);
      setOpenDrawer(true);
    }
  }, [obtenerClienteState?.data]);

    // Muestra alertas al completar la edición
    useEffect(() => {
      if (editarClienteState?.data?.success === true) {
          showAlertAsync({
              title: "Éxito",
              icon: "success",
              html: editarClienteState?.data?.message,
          });
          dispatch(editClienteSlice?.actions?.resetState());
          handleCloseDrawer();
          dispatch(getAllCliente());
      } else if (editarClienteState?.error) {
          showAlertAsync({
              title: "Error",
              icon: "error",
              html: editarClienteState?.error,
          });
          dispatch(editClienteSlice?.actions?.resetState());
      }
  }, [editarClienteState, dispatch]);

    


    return(
        <>
         <Card variant="outlined" sx={{ maxWidth: 1200, mx: "auto", mt: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Cliente
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <TextField
              label="Buscar"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: 300 }}
            />
            <Box display="flex" gap={2}>
              <Button variant="contained" onClick={handleRedirectToCreate} sx={{ textTransform: "none", fontWeight: "bold", backgroundColor: "#004080", color: "#fff", '&:hover': { backgroundColor: "#003366" } }}>
                Crear Cliente
              </Button>
             
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>CEDULA</StyledTableCell>
                  <StyledTableCell>TELEFONO</StyledTableCell>
                  <StyledTableCell align="center">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mostrarClienteState.data?.filter((item) =>
                  item.nombreCliente.toLowerCase().includes(searchTerm.toLowerCase())
                ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                  <StyledTableRow key={item.idCliente}>
                    <StyledTableCell>{item.idCliente}</StyledTableCell>
                    <StyledTableCell>{item.nombreCliente}</StyledTableCell>
                    <StyledTableCell>{item.cedula}</StyledTableCell>
                    <StyledTableCell>{item.direccion}</StyledTableCell>
                    <StyledTableCell>{item.telefono}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Tooltip title="Eliminar">
                        <IconButton color="error" onClick={() => confirmDelete(item.idCliente)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton color="primary" onClick={() => getById(item.idCliente)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
            <IconButton onClick={() => handleChangePage(page - 1)} disabled={page === 0}>
              <KeyboardArrowLeft />
            </IconButton>
            <Typography variant="body2" mx={2}>
              {`${page * rowsPerPage + 1} - ${Math.min((page + 1) * rowsPerPage, mostrarClienteState?.data?.length || 0)} de ${mostrarClienteState?.data?.length || 0}`}
            </Typography>
            <IconButton onClick={() => handleChangePage(page + 1)} disabled={(page + 1) * rowsPerPage >= (mostrarClienteState?.data?.length || 0)}>
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <EditClienteModal 
        open={openDrawer}
        onClose={handleCloseDrawer}
        editData={editClienteData}
        handleInputChange={handleInputChange}
        saveChanges={() => dispatch(editCliente(editClienteData))}
      />
        </>
    )

};

export default MostrarClientePage;