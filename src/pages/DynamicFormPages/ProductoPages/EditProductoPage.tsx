import React from 'react';
import { Box, Button, Grid, Typography, TextField, Drawer, IconButton, Autocomplete } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { RootState } from 'redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooksRedux';


import { EditarProductoEntity } from 'data/Entity/ProductoEntity';
import { selectorCategoria } from '../../../redux/action/SelectorAction';

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    editData: EditarProductoEntity | null; // Cambiar al tipo correcto
    handleInputChange: (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
    handleSelectChange: (newValue: number | null) => void;
    saveChanges: () => void;
}

const EditProductoModal: React.FC<EditModalProps> = ({
    open,
    onClose,
    editData,
    handleInputChange,
    handleSelectChange,
    saveChanges,
}) => {

        const dispatch = useAppDispatch();
    const categoriaProductoOptions = useAppSelector((state: RootState) => state.selectorCategoriaProducto.data || []);
    console.log(categoriaProductoOptions)

    const [optionCategoriaProductoSelected, setOptionCategoriaProductoSelected] = React.useState<{ value: string, label: string } | null>(null);
    React.useEffect(() => {
        if (open && editData?.idCategoriaProducto) {
            dispatch(selectorCategoria())
            console.log(editData.idCategoriaProducto)
            const selectedOption = categoriaProductoOptions.find(
                (option) => option.value == editData.idCategoriaProducto.toString()
            );
            setOptionCategoriaProductoSelected(selectedOption || null);
        }
    }, [open, editData, categoriaProductoOptions]);



    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box p={3} width={400}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="bold">
                        Editar Producto
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            value={editData?.nombreProducto || ''}
                            onChange={(event) => handleInputChange(event, 'nombreProducto')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Codigo Producto"
                            variant="outlined"
                            fullWidth
                            value={editData?.codigoProducto || ''}
                            onChange={(event) => handleInputChange(event, 'codigoProducto')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Precio"
                            variant="outlined"
                            fullWidth
                            value={editData?.precio || ''}
                            onChange={(event) => handleInputChange(event, 'precio')}
                        />
                    </Grid>
                </Grid>
                
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            value={editData?.stock || ''}
                            onChange={(event) => handleInputChange(event, 'stock')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                     <Grid item xs={12}>
                         <Autocomplete
                             options={categoriaProductoOptions.map(option => ({
                                 value: option.value.toString(),
                                 label: option.label,
                             }))}
                             getOptionLabel={(option) => option.label}
                             value={optionCategoriaProductoSelected}  // Precarga el valor seleccionado
                             onChange={(event, newValue) => {
                                 setOptionCategoriaProductoSelected(newValue);
                                 handleSelectChange(newValue ? Number(newValue.value) : null); // Actualiza el estado
                             }}
                             renderInput={(params) => (
                                 <TextField
                                     {...params}
                                     label="Selecciona una categoria"
                                     variant="outlined"
                                 />
                             )}
                         />
                     </Grid>
                 </Grid>
              
              
                <Box mt={3} display="flex" justifyContent="flex-end">
                    <Button onClick={onClose} color="secondary" variant="outlined" sx={{ mr: 2 }}>
                        Cancelar
                    </Button>
                    <Button onClick={saveChanges} color="primary" variant="contained">
                        Guardar
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default EditProductoModal;
