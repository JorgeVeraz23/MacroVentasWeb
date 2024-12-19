

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
import { useAppDispatch, useAppSelector } from "../../../redux/hooksRedux";


import { StyledTableCell, StyledTableRow } from "../../../components/styles";
import { showAlertAsync } from "../../../components/CustomAlert";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";


import { getProductoSlice } from "../../../redux/slice/Producto/GetProductoByIdSlice";
import { deleteProductoSlice } from "../../../redux/slice/Producto/DeleteProductoSlice";
import { editProductoSlice } from "../../../redux/slice/Producto/EditProductoSlice";

import EditProductoModal from "./EditProductoPage";


import { EditarProductoEntity } from "data/Entity/ProductoEntity";
import { deleteProducto, editProducto, getAllProducto, getProductoById } from "../../../redux/action/ProductoAction";




const MostrarProductoPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState<number>(0);
    const rowsPerPage = 5;

    

    const mostrarProductoState = useAppSelector(state => state.getAllProductos);
    const editarProductoState = useAppSelector(state => state.editProducto);
    const eliminarProductoState = useAppSelector(state => state.deleteProducto);
    const obtenerProductoState = useAppSelector(state => state.getProducto);


    const [editProductoData, setProductoData] = useState<EditarProductoEntity>({
        idProducto: 0,
        nombreProducto: '',
        precio: 0,
        stock: 0,
        codigoProducto: 0,
        idCategoriaProducto: 0,
    })

    useEffect(() => {
        init();
    }, [])



    const init = async () => {
       await dispatch(getAllProducto())
    }

    

    const handleRedirectToCreate = () => {
        navigate("/create-product");
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
    dispatch(deleteProducto(id));
  };

  
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    dispatch(getProductoSlice.actions.resetState());
  };



     // Manejo de clic en "Editar"
     const getById = async (id: number) => {
        if (!loading) {
            setLoading(true);
            await dispatch(getProductoById(id)).finally(() => setLoading(false));
        }
    };


    const handleChangePage = (newPage: number) => {
        setPage(newPage);
      };

          // Manejo de cambios en los campos del formulario de edición
          const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
            const value = event.target.value;
            setProductoData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        };

              // Manejo del cambio en el select (Autocomplete)
      const handleSelectChange = (newValue: number | null) => {
        setProductoData((prevData) => ({
            ...prevData,
            idCategoriaProducto: newValue || 0,
        }));
    };
    

        
  useEffect(() => {
    if (eliminarProductoState?.data.success === true) {
      showAlertAsync({
        title: 'Éxito',
        icon: 'success',
        html: 'Registro eliminado con éxito',
      });
      dispatch(getAllProducto());
      dispatch(deleteProductoSlice?.actions?.resetState());
    } else if (eliminarProductoState?.error) {
      showAlertAsync({
        title: 'Error',
        icon: 'error',
        html: eliminarProductoState?.error,
      });
      dispatch(deleteProductoSlice?.actions?.resetState());
    }
  }, [eliminarProductoState, dispatch]);

  useEffect(() => {
    if(obtenerProductoState?.data){
      setProductoData(obtenerProductoState?.data);
      setOpenDrawer(true);
    }
  }, [obtenerProductoState?.data]);

    // Muestra alertas al completar la edición
    useEffect(() => {
      if (editarProductoState?.data?.success === true) {
          showAlertAsync({
              title: "Éxito",
              icon: "success",
              html: editarProductoState?.data?.message,
          });
          dispatch(editProductoSlice?.actions?.resetState());
          handleCloseDrawer();
          dispatch(getAllProducto());
      } else if (editarProductoState?.error) {
          showAlertAsync({
              title: "Error",
              icon: "error",
              html: editarProductoState?.error,
          });
          dispatch(editProductoSlice?.actions?.resetState());
      }
  }, [editarProductoState, dispatch]);

    


    return(
        <>
         <Card variant="outlined" sx={{ maxWidth: 1200, mx: "auto", mt: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Producto
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
                Crear Producto
              </Button>
             
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>CODIGO</StyledTableCell>
                  <StyledTableCell>PRECIO</StyledTableCell>
                  <StyledTableCell>STOCK</StyledTableCell>
                  <StyledTableCell>CATEGORIA</StyledTableCell>
                  <StyledTableCell align="center">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mostrarProductoState.data?.filter((item) =>
                  item.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
                ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                  <StyledTableRow key={item.idProducto}>
                    <StyledTableCell>{item.idProducto}</StyledTableCell>
                    <StyledTableCell>{item.nombreProducto}</StyledTableCell>
                    <StyledTableCell>{item.codigoProducto}</StyledTableCell>
                    <StyledTableCell>{item.precio}</StyledTableCell>
                    <StyledTableCell>{item.stock}</StyledTableCell>
                    <StyledTableCell>{item.nombreCategoriaProducto}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Tooltip title="Eliminar">
                        <IconButton color="error" onClick={() => confirmDelete(item.idProducto)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton color="primary" onClick={() => getById(item.idProducto)}>
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
              {`${page * rowsPerPage + 1} - ${Math.min((page + 1) * rowsPerPage, mostrarProductoState?.data?.length || 0)} de ${mostrarProductoState?.data?.length || 0}`}
            </Typography>
            <IconButton onClick={() => handleChangePage(page + 1)} disabled={(page + 1) * rowsPerPage >= (mostrarProductoState?.data?.length || 0)}>
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <EditProductoModal 
        open={openDrawer}
        onClose={handleCloseDrawer}
        editData={editProductoData}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        saveChanges={() => dispatch(editProducto(editProductoData))}
      />
        </>
    )

};

export default MostrarProductoPage;