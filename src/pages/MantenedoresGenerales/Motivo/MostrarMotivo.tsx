// import React, { useEffect, useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, 
//   TableRow, Paper, Card, CardContent, IconButton, Button, 
//   Tooltip, Box, Typography, Divider, TextField
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks/hooksRedux';
// import { useNavigate } from "react-router-dom";
// import { showAlertAsync } from "../../../components/alerts/CustomAlert";
// import * as XLSX from 'xlsx';
// import { StyledTableCell, buttonStyle, StyledTableRow, cardContentStyle } from "../../../components/styles/styles";
// import PageContainer from "../../../components/PageContainner";
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// // Redux Actions y Slices
// import EditMotivoModal from "./EditMotivoModal";
// import { EditMotivoEntity } from "../../../app/api/domain/entities/Entities/MotivoEntity";
// // import { deleteMotivo, editMotivo, getAllMotivo, getMotivoById } from "../../../app/redux/actions/MotivoActions/MotivoActions";
// // import { deleteMotivoSlice } from "../../../app/redux/slices/MotivoSlice/DeleteMotivoSlice";
// // import { editMotivoSlice } from "../../../app/redux/slices/MotivoSlice/EditMotivoSlice";
// // import { getMotivoSlice } from "../../../app/redux/slices/MotivoSlice/GetMotivoSlice";

// const MotivosPage = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState<number>(0);
//   const rowsPerPage = 5;


//   const mostrarMotivoState = useAppSelector(state => state.GetAllMotivo);
//   const eliminarMotivoState = useAppSelector(state => state.DeleteMotivo);
//   const obtenerMotivoPorIdState = useAppSelector(state => state.GetMotivo);
//   const editarMotivoState = useAppSelector(state => state.EditMotivo);



//   const [editMotivoData, setEditMotivoData] = useState<EditMotivoEntity>({
//     idMotivo: 0,
//     nombre: '',
//     idAreaEvaluada: 0,
//     codigoMotivo: '',
//   });

//   // // Inicialización
//   // useEffect(() => {
//   //   dispatch(getAllMotivo());
//   // }, [dispatch]);

//   // useEffect(() => {
//   //   if (eliminarMotivoState.data) {
//   //     showAlertAsync({
//   //       title: 'Éxito',
//   //       icon: 'success',
//   //       html: 'Registro eliminado con éxito',
//   //     });
//   //     dispatch(getAllMotivo());
//   //     dispatch(deleteMotivoSlice.actions.resetState());
//   //   } else if (eliminarMotivoState.error) {
//   //     showAlertAsync({
//   //       title: 'Error',
//   //       icon: 'error',
//   //       html: eliminarMotivoState.error,
//   //     });
//   //     dispatch(deleteMotivoSlice.actions.resetState());
//   //   }
//   // }, [eliminarMotivoState, dispatch]);

//   useEffect(() => {
//     if(obtenerMotivoPorIdState.data){
//       setEditMotivoData(obtenerMotivoPorIdState.data);
//       setOpenDrawer(true);
//     }
//   }, [obtenerMotivoPorIdState.data]);

//   //   // Muestra alertas al completar la edición
//   //   useEffect(() => {
//   //     if (editarMotivoState.data) {
//   //         showAlertAsync({
//   //             title: "Éxito",
//   //             icon: "success",
//   //             html: "Motivo editado con éxito",
//   //         });
//   //         dispatch(editMotivoSlice.actions.resetState());
//   //         handleCloseDrawer();
//   //         dispatch(getAllMotivo());
//   //     } else if (editarMotivoState.error) {
//   //         showAlertAsync({
//   //             title: "Error",
//   //             icon: "error",
//   //             html: editarMotivoState.error,
//   //         });
//   //         dispatch(editMotivoSlice.actions.resetState());
//   //     }
//   // }, [editarMotivoState, dispatch]);




//   // const confirmDelete = (id: number) => {
//   //   showAlertAsync({
//   //     title: 'Advertencia',
//   //     icon: 'warning',
//   //     html: '¿Estás seguro de que quieres eliminar este registro?',
//   //     showCancelButton: true,
//   //     confirmButtonText: 'Sí, seguro',
//   //     onConfirm: () => deleteRegister(id),
//   //   });
//   // };

//   // const deleteRegister = (id: number) => {
//   //   dispatch(deleteMotivo(id));
//   // };

//   // const handleCloseDrawer = () => {
//   //   setOpenDrawer(false);
//   //   dispatch(getMotivoSlice.actions.resetState());
//   // };

//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(mostrarMotivoState.data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Motivo");
//     XLSX.writeFile(workbook, "Motivo.xlsx");
//   };

//   const handleCreateAsesor = () => {
//     navigate("/private/Motivos/Crear");
//   };

//   const handleChangePage = (newPage: number) => {
//     setPage(newPage);
//   };

//       // Manejo de cambios en los campos del formulario de edición
//       const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
//         const value = event.target.value;
//         setEditMotivoData((prevData) => ({
//             ...prevData,
//             [field]: value,
//         }));
//     };
  
//       // Manejo del cambio en el select (Autocomplete)
//       const handleSelectChange = (newValue: number | null) => {
//         setEditMotivoData((prevData) => ({
//             ...prevData,
//             idAreaEvaluada: newValue || 0,
//         }));
//     };

//       //   // Manejo de clic en "Editar"
//       //   const getGestorReclamoByID = async (id: number) => {
//       //     if (!loading) {
//       //         setLoading(true);
//       //         await dispatch(getMotivoById(id)).finally(() => setLoading(false));
//       //     }
//       // };
  
  

//   return (
//     <PageContainer>
//       <Card variant="outlined" sx={{ maxWidth: 1200, mx: "auto", mt: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
//         <CardContent>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Motivo
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//           <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
//             <TextField
//               label="Buscar"
//               variant="outlined"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               sx={{ width: 300 }}
//             />
//             <Box display="flex" gap={2}>
//               <Button variant="contained" onClick={handleCreateAsesor} sx={{ textTransform: "none", fontWeight: "bold", backgroundColor: "#004080", color: "#fff", '&:hover': { backgroundColor: "#003366" } }}>
//                 Crear Motivo
//               </Button>
//               <Button variant="contained" onClick={exportToExcel} sx={{ textTransform: "none", fontWeight: "bold", backgroundColor: "#4CAF50", color: "#fff", '&:hover': { backgroundColor: "#388E3C" } }}>
//                 Descargar Excel
//               </Button>
//             </Box>
//           </Box>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>ID</StyledTableCell>
//                   <StyledTableCell>Nombre</StyledTableCell>
//                   <StyledTableCell>Area Evaluada</StyledTableCell>
//                   <StyledTableCell>Codigo Motivo</StyledTableCell>
//                   <StyledTableCell align="center">Acciones</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {mostrarMotivoState.data?.filter((item) =>
//                   item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//                 ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
//                   <StyledTableRow key={item.idMotivo}>
//                     <StyledTableCell>{item.idMotivo}</StyledTableCell>
//                     <StyledTableCell>{item.nombre}</StyledTableCell>
//                     <StyledTableCell>{item.areaEvaluada}</StyledTableCell>
//                     <StyledTableCell>{item.codigoMotivo}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {/* <Tooltip title="Eliminar">
//                         <IconButton color="error" onClick={() => confirmDelete(item.idMotivo)}>
//                           <DeleteIcon />
//                         </IconButton>
//                       </Tooltip> */}
//                       {/* <Tooltip title="Editar">
//                         <IconButton color="primary" onClick={() => getGestorReclamoByID(item.idMotivo)}>
//                           <EditIcon />
//                         </IconButton>
//                       </Tooltip> */}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
//             <IconButton onClick={() => handleChangePage(page - 1)} disabled={page === 0}>
//               <KeyboardArrowLeft />
//             </IconButton>
//             <Typography variant="body2" mx={2}>
//               {`${page * rowsPerPage + 1} - ${Math.min((page + 1) * rowsPerPage, mostrarMotivoState.data?.length || 0)} de ${mostrarMotivoState.data?.length || 0}`}
//             </Typography>
//             <IconButton onClick={() => handleChangePage(page + 1)} disabled={(page + 1) * rowsPerPage >= (mostrarMotivoState.data?.length || 0)}>
//               <KeyboardArrowRight />
//             </IconButton>
//           </Box>
//         </CardContent>
//       </Card>
//       {/* <EditMotivoModal 
//         open={openDrawer}
//         onClose={handleCloseDrawer}
//         editData={editMotivoData}
//         handleInputChange={handleInputChange}
//         handleSelectChange={handleSelectChange}
//         saveChanges={() => dispatch(editMotivo(editMotivoData))}
//       /> */}
//     </PageContainer>
//   );
// };

// export default MotivosPage;
