import { createSlice } from "@reduxjs/toolkit";


import { getClienteById } from "../../action/ClienteAction";
import { EditarClienteEntity } from "data/Entity/ClienteEntity";

export interface initialStateSlice {
    data: EditarClienteEntity | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialStateSlice = {
    data: null,
    error: null,
    loading: false
}

export const getClienteSlice = createSlice({
    name: 'GetClienteSlice',
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
        .addCase(getClienteById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getClienteById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getClienteById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default getClienteSlice.reducer;

