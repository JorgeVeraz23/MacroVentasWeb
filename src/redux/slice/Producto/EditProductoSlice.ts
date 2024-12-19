import { createSlice } from "@reduxjs/toolkit";


import { ApiResponse } from "data/Entity/ApiResponseEntity";

import { editProducto } from "../../action/ProductoAction";


export interface initialStateSlice {
    data: ApiResponse;
    loading: boolean;
    error: string | null;
}

const initialState : initialStateSlice = {
    data : {
        message: '',
        detail: '',
        success: false,
        status: 0,
    },
    error : null,
    loading : false
}


export const editProductoSlice = createSlice({
    name: 'EditProductoSlice',
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
        .addCase(editProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(editProducto.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(editProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default editProductoSlice.reducer;