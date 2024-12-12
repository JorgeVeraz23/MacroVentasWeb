import React from 'react';
import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';

const StyledInput = styled(InputBase)(({ theme }) => ({
    width: '100%',
    border: '1px solid #bdbdbd',
    borderRadius: '4px',
    padding: '8px 12px',
    '&:hover': {
        borderColor: '#9e9e9e',
    },
    '&.Mui-focused': {
        borderColor: '#3f51b5',
        boxShadow: '0 0 1px 1px #3f51b5',
    },
    '& .MuiInputBase-input': {
        padding: 0,
    },
}));

const CustomInput = ({ onChange, multiline = false, rows = 1, ...props }) => {
    return (
        <StyledInput
            onChange={onChange}
            multiline={multiline}
            rows={multiline ? rows : undefined}
            {...props}
        />
    );
};
export default CustomInput;
