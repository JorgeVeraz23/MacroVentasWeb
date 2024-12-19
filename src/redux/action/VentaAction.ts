import { createAsyncThunk } from "@reduxjs/toolkit";


import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { CreateVenta } from "data/Entity/VentaEntity";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import VentaRepositoryImpl from "../../data/repositoryImpl/VentaRepositoryImpl";

const repository = new VentaRepositoryImpl();

// export const getAllProducto = createAsyncThunk<ShowProductoEntity[], void, {rejectValue: string}>(
//     "producto/GetAllProducto",
//     async(data, thunkAPI) => {
//         try{
//             return await repository.getAllProducto();
//         }catch(error){
//             const errorMessage = error instanceof Error ? error.message : "Error desconocido";
//             return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );

// export const selectorProducto = createAsyncThunk<KeyValueEntity[], void, {rejectValue: string}>(
//     "producto/SelectorProducto",
//     async(data, thunkAPI) => {
//         try{
//             return await repository.selectorProducto();
//         }catch(error){
//             const errorMessage = error instanceof Error ? error.message : "Error desconocido";
//             return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );



// export const getProductoById = createAsyncThunk<EditarProductoEntity, number, {rejectValue: string}>(
//     "producto/GetProductoById",
//     async(data, thunkAPI) => {
//         try{
//             return await repository.getProductoById(data);
//         }catch(error){
//         const errorMessage = error instanceof Error ? error.message: "Error desconocido";
//         return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );

export const createVenta = createAsyncThunk<ApiResponse, CreateVenta, {rejectValue: string}>(
    "venta/CreateVenta",
    async (data: CreateVenta, thunkAPI) => {
        try{
            return await repository.createVenta(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

// export const deleteProducto = createAsyncThunk<ApiResponse, number, { rejectValue: string}>(
//     "producto/DeleteProducto",
//     async(data: number, thunkAPI) => {
//         try{
//             return await repository.deleteProducto(data);
//         }catch(error){
//             const errorMessage = error instanceof Error? error.message: "Error desconocido";
//             return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );

// export const editProducto = createAsyncThunk<ApiResponse, EditarProductoEntity, {rejectValue: string}>(
//     "producto/EditProducto",
//     async (data: EditarProductoEntity, thunkAPI) => {
//         try {
//             return await repository.editProducto(data);
//         }catch(error){
//             const errorMessage = error instanceof Error ? error.message : "Error desconocido";
//             return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );

