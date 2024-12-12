import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooksRedux";
// import { getClients } from 'app/redux/actions/CatalogueActions';
import { getTipoFichaSelector } from '../../app/redux/actions/SelectoresActions/SelectoresActions';
import { Box, Typography } from '@mui/material';
import Select from 'react-select';

type option = {
    value: string,
    label: string
}

interface Props {
    placeholder?: string,
    isClearable?: boolean,
    isSearchable?: boolean,
    value?: option,
    isRequired?: boolean,
    onChange?: (option: {value: string, label: string}) => void,
}

export default function TipoFichaSelect(props: Props) {
    const { 
        value, 
        placeholder = "Select...", 
        isSearchable = true, 
        isClearable = false,
        isRequired = false,
    } = props;
    
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.SelectorTipoFicha);
    const [options, setOptions] = useState<option[]>([]);
    const [valueControl, setValueControl] = useState<option | null>(value);
    //useEffect antigui
    // useEffect(() => {
    //     if (state.data === null) {
    //         dispatch(getTipoFichaSelector());
    //     } else {
    //         // Mapear los datos a un array de opciones
    //         const mappedOptions = state.data.map(selector => ({
    //             value: selector.value.toString(),
    //             label: selector.label // o el campo que contiene el nombre en tu objeto SelectorEntity
    //         }));
    //         setOptions(mappedOptions);
    //     }
    // }, [state.data, dispatch]);

    useEffect(() => {
        if(state.data === null){
            dispatch(getTipoFichaSelector())
        }
    }, [state.data])
    
    const handleSelectChange = (option: { value: string, label: string }) => {
        if (props.onChange !== undefined) {
            props.onChange(option);
        } 
        setValueControl(option);
    }

   

    return (
        <Box>
            <Select
                isClearable={isClearable}
                isSearchable={isSearchable}
                placeholder={placeholder}
                value={value}
                options={state.data ?? [{ value: '', label: '' }]}
                onChange={(option: option) => handleSelectChange(option)}
            />
        </Box>
    );
}
