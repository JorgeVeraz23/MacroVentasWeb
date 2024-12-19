import { createSlice } from "@reduxjs/toolkit";

// import { selectorCategoria } from "../../action/SelectorAction";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import { selectorUsuario } from "../../action/UsuarioAction";

export interface initialState {
    data: KeyValueEntity[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: initialState = {
    data: null,
    error: null,
    loading: false
}

export const selectorUsuarioSlice = createSlice({
    name: 'SelectorUsuarioSlice',
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
        .addCase(selectorUsuario.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(selectorUsuario.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(selectorUsuario.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default selectorUsuarioSlice.reducer;