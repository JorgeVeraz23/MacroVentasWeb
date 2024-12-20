import { createAsyncThunk } from "@reduxjs/toolkit";


import { SelectorEntity } from "data/Entity/KeyValueEntity";

import UsuarioRepositoryImpl from "../../data/repositoryImpl/UsuarioRepositoryImpl";

const repository = new UsuarioRepositoryImpl();



export const selectorUsuario = createAsyncThunk<SelectorEntity[], void, {rejectValue: string}>(
    "usuario/SelectorUsuario",
    async(data, thunkAPI) => {
        try{
            return await repository.selectorUsuario();
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);



