import { createSlice } from "@reduxjs/toolkit";

import { createVenta } from "../../action/VentaAction";
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


export const createVentaSlice = createSlice({
    name: 'CreateVentaSlice',
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
        .addCase(createVenta.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createVenta.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(createVenta.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default createVentaSlice.reducer;