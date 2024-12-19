import { createSlice } from "@reduxjs/toolkit";

import { createProducto } from "../../action/ProductoAction";
import { ApiResponse } from "data/Entity/ApiResponseEntity";

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


export const createProductoSlice = createSlice({
    name: 'CreateProductoSlice',
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
        .addCase(createProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createProducto.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(createProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default createProductoSlice.reducer;