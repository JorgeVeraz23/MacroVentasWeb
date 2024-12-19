import { createSlice } from "@reduxjs/toolkit";

import { selectorCategoria } from "../../action/SelectorAction";
import { SelectorEntity } from "data/Entity/KeyValueEntity";

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

export const selectorCategoriaProductoSlice = createSlice({
    name: 'SelectorCategoriaProductoSlice',
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
        .addCase(selectorCategoria.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(selectorCategoria.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(selectorCategoria.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Algo anda mal';
        });
    },
})

export default selectorCategoriaProductoSlice.reducer;