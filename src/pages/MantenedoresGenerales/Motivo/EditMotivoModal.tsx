// import React from 'react';
// import { Box, Button, Grid, Typography, TextField, Drawer, IconButton, Autocomplete } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks/hooksRedux';
// import { RootState } from 'app/redux/store/store';
// // import { EditarGestorReclamoEntity } from '../../../app/api/domain/entities/Entities/GestorReclamoEntity';
// // import { getTerritorioSelector } from '../../../app/redux/actions/SelectoresActions/SelectoresActions';
// import { EditMotivoEntity } from '../../../app/api/domain/entities/Entities/MotivoEntity';
// // import { getMotivosSelector } from '../../../app/redux/actions/SelectoresActions/SelectoresActions';

// interface EditModalProps {
//     open: boolean;
//     onClose: () => void;
//     editData: EditMotivoEntity | null; // Cambiar al tipo correcto
//     handleInputChange: (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
//     handleSelectChange: (newValue: number | null) => void;
//     saveChanges: () => void;
// }

// const EditMotivoModal: React.FC<EditModalProps> = ({
//     open,
//     onClose,
//     editData,
//     handleInputChange,
//     handleSelectChange,
//     saveChanges
// }) => {

//     const dispatch = useAppDispatch();
//     // Obtener las opciones de casos desde Redux
//     const motivoOptions = useAppSelector((state: RootState) => state.SelectorCaso.data || []);
//     console.log(motivoOptions)
//     // Variable para mantener la opción seleccionada del `Autocomplete`
//     const [optionCasoSelected, setOptionCasoSelected] = React.useState<{ value: string, label: string } | null>(null);
//    console.log(editData)
//     // Precargar los datos en el `Autocomplete` cuando abres el modal
//     // React.useEffect(() => {
//     //     if (open && editData?.idCaso) {
//     //         dispatch(getMotivosSelector())
//     //         console.log(editData.idCaso)
//     //         const selectedOption = motivoOptions.find(
//     //             (option) => option.value == editData.idCaso.toString()
//     //         );
//     //         setOptionCasoSelected(selectedOption || null);
//     //     }
//     // }, [open, editData, motivoOptions]);

//     return (
//         <Drawer anchor="right" open={open} onClose={onClose}>
//             <Box p={3} width={400}>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography variant="h5" fontWeight="bold">
//                         Editar Motivo
//                     </Typography>
//                     <IconButton onClick={onClose}>
//                         <CloseIcon />
//                     </IconButton>
//                 </Box>
//                 <Grid container spacing={2} mt={2}>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Motivo Nombre"
//                             variant="outlined"
//                             fullWidth
//                             value={editData?.nombre || ''}
//                             onChange={(event) => handleInputChange(event, 'nombre')}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid container spacing={2} mt={2}>
//                     <Grid item xs={12}>
//                         <TextField
//                             label="Codigo Motivo"
//                             variant="outlined"
//                             fullWidth
//                             value={editData?.codigoMotivo || ''}
//                             onChange={(event) => handleInputChange(event, 'codigoMotivo')}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid container spacing={2} mt={2}>
//                     <Grid item xs={12}>
//                         <Autocomplete
//                             options={motivoOptions.map(option => ({
//                                 value: option.value.toString(),
//                                 label: option.label,
//                             }))}
//                             getOptionLabel={(option) => option.label}
//                             value={optionCasoSelected}  // Precarga el valor seleccionado
//                             onChange={(event, newValue) => {
//                                 setOptionCasoSelected(newValue);
//                                 handleSelectChange(newValue ? Number(newValue.value) : null); // Actualiza el estado
//                             }}
//                             renderInput={(params) => (
//                                 <TextField
//                                     {...params}
//                                     label="Selecciona un Caso"
//                                     variant="outlined"
//                                 />
//                             )}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Box mt={3} display="flex" justifyContent="flex-end">
//                     <Button onClick={onClose} color="secondary" variant="outlined" sx={{ mr: 2 }}>
//                         Cancelar
//                     </Button>
//                     <Button onClick={saveChanges} color="primary" variant="contained">
//                         Guardar
//                     </Button>
//                 </Box>
//             </Box>
//         </Drawer>
//     );
// };

// export default EditMotivoModal;
