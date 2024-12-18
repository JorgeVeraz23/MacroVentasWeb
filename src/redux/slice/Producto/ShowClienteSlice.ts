import { createSlice } from "@reduxjs/toolkit";

import { getAllProducto } from "redux/action/ProductoAction";
import { ShowProductoEntity } from "data/Entity/ProductoEntity";

export interface initialState {
    data: ShowProductoEntity[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialState = {
    data: null,
    error: null,
    loading: false
}

export const getAllProductoSlice = createSlice({
    name: 'GetAllProductoSlice',
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
        .addCase(getAllProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllProducto.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getAllProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default getAllProductoSlice.reducer;