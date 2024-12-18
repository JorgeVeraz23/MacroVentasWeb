import { createSlice } from "@reduxjs/toolkit";

import { editCliente } from "../../action/ClienteAction";
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


export const editClienteSlice = createSlice({
    name: 'EditClienteSlice',
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
        .addCase(editCliente.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(editCliente.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(editCliente.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default editClienteSlice.reducer;