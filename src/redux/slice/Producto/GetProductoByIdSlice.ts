import { createSlice } from "@reduxjs/toolkit";

import { getProductoById } from "redux/action/ProductoAction";
import { EditarProductoEntity } from "data/Entity/ProductoEntity";

export interface initialStateSlice {
    data: EditarProductoEntity | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialStateSlice = {
    data: null,
    error: null,
    loading: false
}

export const getProductoSlice = createSlice({
    name: 'GetProductoSlice',
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
        .addCase(getProductoById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProductoById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProductoById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default getProductoSlice.reducer;

