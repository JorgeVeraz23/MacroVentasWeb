import { createSlice } from "@reduxjs/toolkit";

import { getAllCliente } from "../../action/ClienteAction";
import { ShowClienteEntity } from "data/Entity/ClienteEntity";

export interface initialState {
    data: ShowClienteEntity[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialState = {
    data: null,
    error: null,
    loading: false
}

export const getAllClienteSlice = createSlice({
    name: 'GetAllClienteSlice',
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
        .addCase(getAllCliente.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllCliente.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getAllCliente.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default getAllClienteSlice.reducer;