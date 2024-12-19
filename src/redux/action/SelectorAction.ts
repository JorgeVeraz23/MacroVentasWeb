import { createAsyncThunk } from "@reduxjs/toolkit";


import { ApiResponse } from "data/Entity/ApiResponseEntity";
// import ProductoRepositoryImpl from "../../data/repositoryImpl/ProductoRepositoryImpl";
// import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "data/Entity/ProductoEntity";

import SelectorRepositoryImpl from "../../data/repositoryImpl/SelectorRepositoryImpl";
import { SelectorEntity } from "data/Entity/KeyValueEntity";

const repository = new SelectorRepositoryImpl();

export const selectorCategoria = createAsyncThunk<SelectorEntity[], void, {rejectValue: string}>(
    "selector/SelectorCategoria",
    async(data, thunkAPI) => {
        try{
            return await repository.selectorCategoria();
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);
