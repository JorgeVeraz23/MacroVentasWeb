import { createAsyncThunk } from "@reduxjs/toolkit";


import { ApiResponse } from "data/Entity/ApiResponseEntity";
import ClienteRepositoryImpl from "../../data/repositoryImpl/ClienteRepositoryImpl";
import { CreateClienteEntity, EditarClienteEntity, ShowClienteEntity } from "data/Entity/ClienteEntity";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";

const repository = new ClienteRepositoryImpl();

export const getAllCliente = createAsyncThunk<ShowClienteEntity[], void, {rejectValue: string}>(
    "cliente/GetAllCliente",
    async(data, thunkAPI) => {
        try{
            return await repository.getAllCliente();
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


export const selectorCliente = createAsyncThunk<KeyValueEntity[], void, {rejectValue: string}>(
    "cliente/SelectorCliente",
    async(data, thunkAPI) => {
        try{
            return await repository.selectorCliente();
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const getClienteById = createAsyncThunk<EditarClienteEntity, number, {rejectValue: string}>(
    "cliente/GetClienteById",
    async(data, thunkAPI) => {
        try{
            return await repository.getClienteById(data);
        }catch(error){
        const errorMessage = error instanceof Error ? error.message: "Error desconocido";
        return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const createCliente = createAsyncThunk<ApiResponse, CreateClienteEntity, {rejectValue: string}>(
    "cliente/CreateCliente",
    async (data: CreateClienteEntity, thunkAPI) => {
        try{
            return await repository.createCliente(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const deleteCliente = createAsyncThunk<ApiResponse, number, { rejectValue: string}>(
    "cliente/DeleteCliente",
    async(data: number, thunkAPI) => {
        try{
            return await repository.deleteCliente(data);
        }catch(error){
            const errorMessage = error instanceof Error? error.message: "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const editCliente = createAsyncThunk<ApiResponse, EditarClienteEntity, {rejectValue: string}>(
    "cliente/EditCliente",
    async (data: EditarClienteEntity, thunkAPI) => {
        try {
            return await repository.editCliente(data);
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

