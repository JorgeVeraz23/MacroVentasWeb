// CustomSelect.tsx
import { Box, Typography } from '@mui/material';
import { KeyValueEntity, KeyValueEntity2 } from 'app/api/domain/entities/Entities/SelectoresEntity/SelectorEntity';
import { useState, useEffect } from 'react';
import Select from 'react-select';


interface OptionType<T> {
    value: T; // Cambiar a tipo genérico
    label: string;
}

interface CustomSelectProps<T> {
    isDisabled?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
    placeholder?: string;
    options?: OptionType<T>[]; // Las opciones son del tipo genérico T
    value: OptionType<T> | null | undefined; // El valor también es del tipo genérico T
    onChange: (option: OptionType<T> | null) => void;
    isRequired?: boolean;
}

export default function CustomSelectEnumerators<T>(props: CustomSelectProps<T>) {
    const {
        value,
        placeholder = "Select...",
        isSearchable = true,
        isClearable = false,
        isDisabled = false,
        isRequired = false,
        options = [],
    } = props;

    const [valueControl, setValueControl] = useState<OptionType<T> | null>(value || null);

    useEffect(() => {
        setValueControl(value);
    }, [value]);

    const customStyles = {
        menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
        control: (base: any, state: any) => ({
            ...base,
            fontSize: '12px',
            paddingTop: '1px',
            border: isRequired && valueControl?.value === null
                ? '1px solid red'
                : state.isFocused
                    ? '1px solid blue'
                    : '1px solid #ccc',
            boxShadow: isRequired && valueControl?.value === null
                ? 'none'
                : state.isFocused
                    ? '0 0 0 1px blue'
                    : 'none',
            '&:hover': {
                borderColor: !state.isFocused && isRequired && valueControl?.value === null
                    ? 'red'
                    : !state.isFocused
                        ? '#999'
                        : 'none',
            },
        }),
        option: (base: any, state: any) => ({
            ...base,
            fontSize: '12px',
            backgroundColor: state.isSelected ? 'blue' : 'transparent',
            '&:hover': {
                backgroundColor: state.isSelected ? 'blue' : '#f0f0f0',
            },
        }),
    };

    const handleSelectChange = (option: OptionType<T> | null) => {
        props.onChange(option);
        setValueControl(option);
    };

    return (
        <Box marginRight="15px">
            <Select
                isDisabled={isDisabled}
                isClearable={isClearable}
                isSearchable={isSearchable}
                placeholder={placeholder}
                value={valueControl}
                options={options}
                onChange={(option: any) => handleSelectChange(option)}
                styles={customStyles}
                menuPortalTarget={document.body} // Renderiza el menú en el document.body
            />
            {isRequired && valueControl?.value === null && (
                <Typography fontSize={12} color="red">
                    Este campo es requerido
                </Typography>
            )}
        </Box>
    );
}
