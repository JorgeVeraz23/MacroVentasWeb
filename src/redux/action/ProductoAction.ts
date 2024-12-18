import { createAsyncThunk } from "@reduxjs/toolkit";


import { ApiResponse } from "data/Entity/ApiResponseEntity";
// import ClienteRepositoryImpl from "../../data/repositoryImpl/ClienteRepositoryImpl";
// import { CreateClienteEntity, EditarClienteEntity, ShowClienteEntity } from "data/Entity/ClienteEntity";

import ProductoRepositoryImpl from "data/repositoryImpl/ProductoRepositoryImpl";
import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "data/Entity/ProductoEntity";

const repository = new ProductoRepositoryImpl();

export const getAllProducto = createAsyncThunk<ShowProductoEntity[], void, {rejectValue: string}>(
    "producto/GetAllProducto",
    async(data, thunkAPI) => {
        try{
            return await repository.getAllProducto();
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const getProductoById = createAsyncThunk<EditarProductoEntity, number, {rejectValue: string}>(
    "producto/GetProductoById",
    async(data, thunkAPI) => {
        try{
            return await repository.getProductoById(data);
        }catch(error){
        const errorMessage = error instanceof Error ? error.message: "Error desconocido";
        return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const createProducto = createAsyncThunk<ApiResponse, CreateProductoEntity, {rejectValue: string}>(
    "producto/CreateProducto",
    async (data: CreateProductoEntity, thunkAPI) => {
        try{
            return await repository.createProducto(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const deleteProducto = createAsyncThunk<ApiResponse, number, { rejectValue: string}>(
    "producto/DeleteProducto",
    async(data: number, thunkAPI) => {
        try{
            return await repository.deleteProducto(data);
        }catch(error){
            const errorMessage = error instanceof Error? error.message: "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const editProducto = createAsyncThunk<ApiResponse, EditarProductoEntity, {rejectValue: string}>(
    "producto/EditProducto",
    async (data: EditarProductoEntity, thunkAPI) => {
        try {
            return await repository.editProducto(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

