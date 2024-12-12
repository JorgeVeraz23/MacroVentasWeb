// import React, { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks/hooksRedux';
// import { useNavigate } from 'react-router-dom';
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardActions,
//   Grid,
//   Typography,
//   Divider,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import CustomInput from '../../../components/Inputs/CustomInput';
// import CustomSelect from '../../../components/Selects/CustomSelect';
// import PageContainer from '../../../components/PageContainner';
// import { showAlertAsync } from '../../../components/alerts/CustomAlert';

// import { CreateMotivoEntity } from '../../../app/api/domain/entities/Entities/MotivoEntity';


// const CrearMotivo = () => {
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();

//     const createMotivoState = useAppSelector(state => state.CreateMotivo);
//     const selectorAreaEvaluadaState = useAppSelector(state => state.SelectorAreaEvaluada);

//     const [optionSelectorAreaEvaluadaSelected, setOptionSelectorAreaEvaluadaSelected] = useState<{ value: string, label: string }>({
//         value: '', label: ''
//     });

//     const [createMotivoData, setCreateMotivoData] = useState<CreateMotivoEntity>({
//         nombre: '',
//         idAreaEvaluada: 0,
//         codigoMotivo: '',
//     });

//     useEffect(() => {
//         // dispatch(getAreaEvaluadaSelector());
//     }, []);

//     // useEffect(() => {
//     //     if (createMotivoState.loading) {
//     //         showAlertAsync({
//     //             title: 'Cargando',
//     //             icon: 'info',
//     //             html: createMotivoState.loading ? "Cargando..." : "Error",
//     //         });
//     //     } else if (createMotivoState.error) {
//     //         showAlertAsync({
//     //             title: 'Error',
//     //             icon: 'error',
//     //             html: createMotivoState.error,
//     //         });
//     //         dispatch(createMotivoSlice.actions.resetState());
//     //     } else if (createMotivoState.data) {
//     //         showAlertAsync({
//     //             title: 'Éxito',
//     //             icon: 'success',
//     //             html: createMotivoState.data.message,
//     //         }).then(() => {
//     //             resetForm();
//     //             dispatch(createMotivoSlice.actions.resetState());
//     //         });
//     //     }
//     // }, [createMotivoState, dispatch]);

//     const resetForm = () => {
//         setCreateMotivoData({
//             nombre: '',
//             idAreaEvaluada: 0,
//             codigoMotivo: '',
//         });
//         setOptionSelectorAreaEvaluadaSelected({ value: '', label: '' });
//     };

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof CreateMotivoEntity) => {
//         setCreateMotivoData((prevData) => ({
//             ...prevData,
//             [field]: event.target.value,
//         }));
//     };

//     const handleMotivoSelectorChange = (option: { value: string, label: string }) => {
//         setOptionSelectorAreaEvaluadaSelected(option);
//         setCreateMotivoData((prevData) => ({
//             ...prevData,
//             idAreaEvaluada: parseInt(option.value),
//         }));
//     };

//     // const createRegister = () => {
//     //     if (createMotivoData.nombre === '' ||
//     //         createMotivoData.idAreaEvaluada === 0
//     //     ) {
//     //         showAlertAsync({
//     //             title: 'Error',
//     //             icon: 'error',
//     //             html: 'Todos los campos son obligatorios',
//     //         });

//     //         console.log(createMotivoData)
//     //         return;
//     //     }
//     //     dispatch(createMotivo(createMotivoData));
//     // };

//     return (
//         <PageContainer>
//             <Card variant="outlined" sx={{ maxWidth: 800, mx: "auto", mt: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
//                 <CardHeader
//                     title="Crear Motivo"
//                     titleTypographyProps={{ variant: 'h5', fontWeight: 'bold', color: "white" }}
//                     sx={{
//                         textAlign: 'center',
//                         backgroundColor: "#004080",
//                         color: "#FFFFFF",
//                         py: 2,
//                         borderTopLeftRadius: 8,
//                         borderTopRightRadius: 8,
//                     }}
//                 />
//                 <CardContent sx={{ padding: '24px' }}>
//                     <Grid container spacing={3} justifyContent="center">
//                         <Grid item xs={12} md={6}>
//                             <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" gutterBottom>
//                                 Area Evaluada
//                             </Typography>
//                             <CustomSelect
//                                 onChange={handleMotivoSelectorChange}
//                                 value={optionSelectorAreaEvaluadaSelected}
//                                 placeholder="Seleccione un area evaluada"
//                                 isRequired={true}
//                                 options={selectorAreaEvaluadaState.data || []}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" gutterBottom>
//                                 Nombre
//                             </Typography>
//                             <CustomInput
//                                 placeholder="Ingrese el nombre del asesor"
//                                 value={createMotivoData.nombre}
//                                 onChange={(event) => handleInputChange(event, 'nombre')}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" gutterBottom>
//                                 Codigo Motivo
//                             </Typography>
//                             <CustomInput
//                                 placeholder="Ingrese el codigo del motivo"
//                                 value={createMotivoData.codigoMotivo}
//                                 onChange={(event) => handleInputChange(event, 'codigoMotivo')}
//                             />
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//                 <Divider />
//                 <CardActions sx={{ padding: 3, display: 'flex', justifyContent: 'space-between' }}>
//                     <Button
//                         onClick={() => navigate('/private/Motivos')}
//                         variant="outlined"
//                         color="primary"
//                         sx={{
//                             textTransform: "none",
//                             fontWeight: "bold",
//                             borderColor: "#004080",
//                             color: "#004080",
//                             '&:hover': { backgroundColor: "#f0f4ff", borderColor: "#003366" },
//                         }}
//                     >
//                         Mostrar Motivos
//                     </Button>
//                     {/* <Button
//                         onClick={createMotivoState.loading ? undefined : createRegister}
//                         variant="contained"
//                         sx={{
//                             backgroundColor: "#004080",
//                             color: "#fff",
//                             textTransform: "none",
//                             fontWeight: "bold",
//                             width: 150,
//                             '&:hover': { backgroundColor: "#003366" },
//                         }}
//                         disabled={createMotivoState.loading}
//                         endIcon={createMotivoState.loading && <CircularProgress size={20} color="inherit" />}
//                     >
//                         {createMotivoState.loading ? 'Guardando...' : 'Guardar'}
//                     </Button> */}
//                 </CardActions>
//             </Card>
//         </PageContainer>
//     );
// }

// export default CrearMotivo;
