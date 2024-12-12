
// import * as React from 'react';
// import dayjs from 'dayjs';
// import { Dayjs } from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import ToggleButton from '@mui/material/ToggleButton';
// import { Typography } from '@mui/material';
// import SoftBox from "components/SoftBox";

// interface DateFilterFormProps {
//   onSubmit: (filterData: { FechaDesde: Dayjs | null; FechaHasta: Dayjs | null }) => void;

// }

// const DateFilterForm: React.FC<DateFilterFormProps> = ({ onSubmit }) => {
//   const [valueDesde, setValueDesde] = React.useState('');
//   const [valueHasta, setValueHasta] = React.useState('');

//   const handleDateChangeDesde = (newValue: Dayjs | null) => {
//     console.log('Nuevo valor Desde:', newValue);
//     setValueDesde(newValue ? newValue.format('YYYY-MM-DD') : '');
//   };

//   const handleDateChangeHasta = (newValue: Dayjs | null) => {
//     console.log('Nuevo valor Hasta:', newValue);
//     setValueHasta(newValue ? newValue.format('YYYY-MM-DD') : '');
//   };

//   const handleSubmit = () => {
//     console.log('Enviando datos de filtro:', { FechaDesde: valueDesde, FechaHasta: valueHasta });
//     onSubmit({ FechaDesde: valueDesde ? dayjs(valueDesde) : null, FechaHasta: valueHasta ? dayjs(valueHasta) : null });
//   };


//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
//         <SoftBox>
//         <Typography>
//           Fecha Desde
//         </Typography>
//         <DatePicker
//           label=""
//           value={valueDesde ? dayjs(valueDesde) : null}
//           onChange={handleDateChangeDesde}
//         />
//         </SoftBox>
//         <SoftBox>
//         <Typography>
//           Fecha Hasta
//         </Typography>
//         <DatePicker
//           label=""
//           value={valueHasta ? dayjs(valueHasta) : null}
//           onChange={handleDateChangeHasta}
//         />
//         </SoftBox>
// <SoftBox mt={4}>
// <ToggleButton
//     onClick={handleSubmit}
//   value="check"
//   aria-label="check"
//   sx={{
//     // Aquí puedes definir estilos utilizando CSS en línea
//     backgroundColor: 'white',
//     color: 'white',
//     '&:hover': {
//       backgroundColor: 'orange',
//     },
//   }}
// >
//   Filtrar
// </ToggleButton>
// </SoftBox>

        
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default DateFilterForm;
