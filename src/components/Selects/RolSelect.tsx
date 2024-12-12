import { useEffect } from 'react';
// import { useDispatch } from "react-redux";
import { useAppDispatch } from '../../app/redux/hooks/hooksRedux';
import { useAppSelector } from "../../app/redux/hooks/hooksRedux";
import { getRolSelector } from '../../app/redux/actions/SelectoresActions/SelectoresActions';
import Select from 'react-select';

type option = {
    value: string,
    label: string
}

interface Props {
    placeHolder?: string | null,
    isClearable?: boolean | null,
    isSearchable?: boolean | null,
    value?: option | null,
    onChange?: (option: {value: string, label: string}) => void,
}

export default function RolSelect(props: Props) {
    const { value, placeHolder = "Select...", isSearchable = true, isClearable = false } = props;
    const customStyles = {
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        control: (provided, state) => ({ ...provided, fontSize: '15px' }),
        option: (provided, state) => ({ ...provided, fontSize: '15px' }),
    };
    const state = useAppSelector(state => state.SelectorRol);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(state.data === null){
            dispatch(getRolSelector());
        }
    }, []);

    const handleSelectChange = (option: {value: string, label: string}) => {
        if(props.onChange !== undefined) props.onChange(option)
    }

    return (
        <Select
            isClearable={isClearable}
            isSearchable={isSearchable}
            placeholder={placeHolder}
            value={value}
            options={state.data ?? [{value: '', label: ''}]}
            styles={customStyles}
            onChange={(option: option) => handleSelectChange(option)}
        />
    );
}