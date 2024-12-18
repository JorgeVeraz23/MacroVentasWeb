import { createAsyncThunk } from "@reduxjs/toolkit";

import FormGroupRepositoryImpl from "../../data/repositoryImpl/FormGroupRepositoryImpl";
import { FormGroupEntity } from "data/Entity/FormGroupEntity";
import { CreateFormResponse } from "./FormAction";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
const repository = new FormGroupRepositoryImpl();




export const getAllFormGroupAction = createAsyncThunk<FormGroupEntity[], void>(
    "formGroup/GetAllFormGroupAction",
    async (_, thunkAPI) => {
        try { 
            const forms = await repository.getAllFormGroup();
            return forms;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


export const getFormGroupSelectorAction = createAsyncThunk<KeyValueEntity[], void>(
    "formGroup/GetFormGroupSelectorAction",
    async (_, thunkAPI) => {
        try {
            const forms = await repository.selectorFormGroup();
            console.log("selectorform grpup en el action", forms)
            return forms;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            console.log("mensaje de error",error.message)
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


export const getFormGroupByIdAction = createAsyncThunk<FormGroupEntity, number>(
    "formGroup/GetFormGroupByIdAction",
    async (id, thunkAPI) => {
        try {
            const form = await repository.getFormGroupById(id);
            return form;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


export const deleteFormGroupAction = createAsyncThunk<number, number>(
    "formGroup/DeleteFormGroupAction",
    async (id, thunkAPI) => {
        try {
            await repository.deleteFormGroup(id);
            return id;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


export const createFormGroupAction = createAsyncThunk<CreateFormResponse, FormGroupEntity>(
    "formGroup/CreateFormGroupAction",
    async (data, thunkAPI) => {
        try {
            await repository.createFormGroup(data);
            return { success: true, message: "Formulario creado correctamente." };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue({ success: false, message: errorMessage });
        }
    }
);


export const editFormGroupAction = createAsyncThunk<FormGroupEntity, FormGroupEntity>(
    "formGroup/EditFormGroupAction",
    async (data, thunkAPI) => {
        try {
            await repository.editFormGroup(data);
            return data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);
