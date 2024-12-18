import { createSlice } from "@reduxjs/toolkit";


import { deleteCliente } from "../../action/ClienteAction";
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


export const deleteClienteSlice = createSlice({
    name: 'DeleteClienteSlice',
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
        .addCase(deleteCliente.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCliente.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteCliente.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default deleteClienteSlice.reducer;