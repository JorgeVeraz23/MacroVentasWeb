import { createSlice } from "@reduxjs/toolkit";

import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import { selectorCliente } from "../../action/ClienteAction";


export interface initialState {
    data: KeyValueEntity[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialState = {
    data: null,
    error: null,
    loading: false
}

export const selectorClienteSlice = createSlice({
    name: 'SelectorClienteSlice',
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(selectorCliente.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(selectorCliente.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(selectorCliente.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default selectorClienteSlice.reducer;