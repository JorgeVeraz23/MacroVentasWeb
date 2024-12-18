import { createSlice } from "@reduxjs/toolkit";


import { deleteProducto } from "redux/action/ProductoAction";
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


export const deleteProductoSlice = createSlice({
    name: 'DeleteProductoSlice',
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
        .addCase(deleteProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteProducto.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default deleteProductoSlice.reducer;