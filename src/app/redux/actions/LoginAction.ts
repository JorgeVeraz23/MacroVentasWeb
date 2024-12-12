import { createAsyncThunk } from "@reduxjs/toolkit";

import UsuarioRepositoryImpl from "../../api/data/UsuarioRepositoryImpl";
// import { LoginResponse, loginEntity } from "../../redux/actions/L";
import { LoginResponse, loginEntity } from "app/api/domain/entities/UserEntity/userEntity";


const repository = new UsuarioRepositoryImpl();

export const loginAction = createAsyncThunk<LoginResponse, loginEntity, {rejectValue: string}>(
    "usuario/LoginAction",
    async (data: loginEntity, thunkAPI) => {
        try{
            return await repository.login(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);