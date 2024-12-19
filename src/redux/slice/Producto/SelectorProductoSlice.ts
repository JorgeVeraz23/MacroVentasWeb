import { createSlice } from "@reduxjs/toolkit";

import {  SelectorEntity } from "data/Entity/KeyValueEntity";
import { selectorProducto } from "../../action/ProductoAction";

export interface initialState {
    data: SelectorEntity[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialState = {
    data: null,
    error: null,
    loading: false
}

export const selectorProductoSlice = createSlice({
    name: 'SelectorProductoSlice',
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
        .addCase(selectorProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(selectorProducto.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(selectorProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default selectorProductoSlice.reducer;