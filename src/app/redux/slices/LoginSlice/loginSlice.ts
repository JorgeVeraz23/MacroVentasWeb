import { createSlice } from "@reduxjs/toolkit";

import { loginAction } from "../../actions/LoginAction";
import { loginEntity, InitialStateLoginEntity, LoginResponse } from "../../../api/domain/entities/UserEntity/userEntity";


export interface initialStateSlice {
    data: LoginResponse | null;
    loading: boolean;
    error: string | null;
}

const initialState : initialStateSlice = {
    data : {
        message: '',
        user: '',
        idUser: 0,
        detail: '',
        success: false,
        status: 0,
    },
    error : null,
    loading : false
}

export const loginUsuarioSlice = createSlice({
    name: 'LoginUsuarioSlice',
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
        .addCase(loginAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });
    },
})

export default loginUsuarioSlice.reducer;