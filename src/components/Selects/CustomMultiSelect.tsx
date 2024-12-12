import React from 'react';
import { Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Typography, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/system';

interface Option {
  value: number;
  label: string;
}

interface CustomMultiSelectProps {
  value: number[]; // Array de valores seleccionados
  onChange: (selected: number[]) => void; // Función para manejar el cambio de selección
  placeholder: string; // Texto de marcador de posición
  options: Option[]; // Opciones disponibles en el selector
}

// Personalización del Select y OutlinedInput
const StyledSelect = styled(Select)({
  width: '100%',
  minWidth: '200px',
  padding: '8px 12px',
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
});

const StyledOutlinedInput = styled(OutlinedInput)({
  padding: '8px',
  fontSize: '16px',
  color: '#333',
  borderColor: '#ced4da',
  borderRadius: '4px',
  '&.Mui-focused': {
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
  },
});

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({ value, onChange, placeholder, options }) => {
  
  // Maneja el cambio en las selecciones
  const handleChange = (event: SelectChangeEvent<number[]>) => {
    const selectedValues = event.target.value as number[];
    onChange(selectedValues);
  };

  return (
    <>
      <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" gutterBottom>
        {placeholder}
      </Typography>
      <StyledSelect
        multiple
        value={value}
        onChange={handleChange}
        input={<StyledOutlinedInput />}
        renderValue={(selected) =>
          (selected as number[])
            .map((id) => options.find((option) => option.value === id)?.label || '')
            .join(', ') || `Seleccione ${placeholder}`
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={value.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default CustomMultiSelect;
