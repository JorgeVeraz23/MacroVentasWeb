import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void; // Función de manejo para confirmar la acción
  handleCancel: () => void; // Función de manejo para cancelar la acción
  title: string;
  content: string;
  type: 'success' | 'error' | 'warning';
  showConfirmButton: boolean; // Mostrar el botón de confirmar
  showCancelButton: boolean; // Mostrar el botón de cancelar
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  handleClose,
  handleConfirm,
  handleCancel,
  title,
  content,
  type,
  showConfirmButton,
  showCancelButton,
}) => {
  const icon =
    type === 'success' ? (
      <CheckCircleOutlineIcon style={{ color: 'green' }} />
    ) : type === 'warning' ? (
      <WarningRoundedIcon style={{ color: 'yellow' }} />
    ) : (
      <ErrorOutlineIcon style={{ color: 'red' }} />
    );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {icon}
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {showCancelButton && (
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
        )}
        {showConfirmButton && (
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirmar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
