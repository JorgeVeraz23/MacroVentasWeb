import { styled } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog"


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  export const cardContentStyle = {
    display: 'flex', // Usa Flexbox
    marginTop: '20px', // Agrega un margen superior de 20px
    border: '2px solid #e0e0e0', // Cambia el color y el grosor del borde según tus preferencias
    borderRadius: '8px', // Opcional: agrega esquinas redondeadas
    padding: '16px', // Opcional: agrega relleno para separar el contenido del borde
  };

  
  export const buttonStyle = {
    marginLeft: 'auto', // Empuja el botón hacia la izquierda
    backgroundColor: '#2196f3', // Cambia el color de fondo del botón según tus preferencias
    color: '#fff', // Cambia el color del texto del botón
  };


  export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogTitle-root': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '& .MuiDialogActions-root': {
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiDialogContent-root': {
      padding: theme.spacing(3),
    },
  }));
  
  export const StyledTypography = styled(Typography)({
    marginBottom: 8,
    fontWeight: 500,
  });

  