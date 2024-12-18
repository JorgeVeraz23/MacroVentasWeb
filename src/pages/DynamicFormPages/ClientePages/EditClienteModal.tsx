import React from 'react';
import { Box, Button, Grid, Typography, TextField, Drawer, IconButton, Autocomplete } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { RootState } from 'redux/store';
import { useAppDispatch, useAppSelector } from 'redux/hooksRedux';

import { EditarClienteEntity } from 'data/Entity/ClienteEntity';

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    editData: EditarClienteEntity | null; // Cambiar al tipo correcto
    handleInputChange: (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
    saveChanges: () => void;
}

const EditClienteModal: React.FC<EditModalProps> = ({
    open,
    onClose,
    editData,
    handleInputChange,
    saveChanges,
}) => {



    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box p={3} width={400}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="bold">
                        Editar Cliente
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
                            value={editData?.nombreCliente || ''}
                            onChange={(event) => handleInputChange(event, 'nombreCliente')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Cedula"
                            variant="outlined"
                            fullWidth
                            value={editData?.cedula || ''}
                            onChange={(event) => handleInputChange(event, 'cedula')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Dirección"
                            variant="outlined"
                            fullWidth
                            value={editData?.direccion || ''}
                            onChange={(event) => handleInputChange(event, 'direccion')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Telefono"
                            variant="outlined"
                            fullWidth
                            value={editData?.telefono || ''}
                            onChange={(event) => handleInputChange(event, 'telefono')}
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

export default EditClienteModal;
