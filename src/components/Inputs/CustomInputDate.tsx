import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface CustomInputProps {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    type?: string;
    accept?: string;
}

const StyledTextField = styled(TextField)<{ valueofcontrol: string, isrequired?: string }>(({ valueofcontrol, isrequired }) => ({
    width: '100%',
    '& .MuiInputBase-root': {
        minWidth: '100% !important',
        padding: '0 !important',
        margin: 0,
        borderRadius: '4px !important',
        border: '1px solid #bdbdbd', // gray[400]
        borderColor: isrequired === "true" && valueofcontrol === "" ? '#f44336' : '#bdbdbd', // error.main : gray[400]
        '&:hover': {
            borderColor: isrequired === "true" && valueofcontrol === "" ? '#f44336' : '#9e9e9e', // error.main : gray[500]
        },
        '&.Mui-focused': {
            borderColor: isrequired === "true" && valueofcontrol === "" ? '#f44336' : '#3f51b5', // error.main : primary.main
            boxShadow: isrequired === "true" && valueofcontrol === "" ? 'none' : '0 0 1px 1px #3f51b5', // no shadow : primary.main shadow
        },
    },
    '& .Mui-disabled': {
        background: 'hsl(0, 0%, 95%)',
        borderColor: '#bdbdbd',
        '&:hover': {
            borderColor: '#bdbdbd',
        },
    },
    '& .MuiInputBase-input': {
        minWidth: '100%',
        minHeight: '38px',
        borderRadius: '4px',
        boxSizing: 'border-box',
        padding: '8px 12px 8px 12px !important',
    },
}));

const CustomInput: React.FC<CustomInputProps> = ({
    onChange,
    type = "text",
    value = "",
    placeholder,
    isRequired = false,
    isDisabled = false,
    accept = ""
}) => {

    const [inputValue, setInputValue] = useState<string>(value);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChange !== undefined) {
            onChange(event);
        }
        setInputValue(event.target.value);
    }

    return (
        <Box>
            <StyledTextField
                disabled={isDisabled}
                type={type}
                value={type !== "file" ? value : ''}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(event)}
                placeholder={placeholder}
                isrequired={isRequired.toString()}
                valueofcontrol={inputValue}
                inputProps={{ accept: accept }}
                InputLabelProps={{ shrink: true }}
            />
        </Box>
    );
};

export default CustomInput;
