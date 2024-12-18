import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./slice/FormSlice"
import formGroupReducer from "./slice/FormGroupSlice"
import FormFieldReducer from "./slice/FormFieldSlice";

import FieldTypeReducer from "./slice/FieldTypeSlice";
import filledFormReducer from "./slice/filledFormSlice";

//Cliente Reducer
import GetAllClienteReducer from "./slice/Cliente/ShowClienteSlice";
import GetClienteReducer from "./slice/Cliente/GetClienteByIdSlice";
import DeleteClienteReducer from "./slice/Cliente/DeleteClienteSlice";
import EditClienteReducer from "./slice/Cliente/EditClienteSlice";
import CreateClienteReducer from "./slice/Cliente/CreateClienteSlice";


//Producto Reducer
import GetAllProductoReducer from "./slice/Cliente/ShowClienteSlice";
import GetProductoReducer from "./slice/Producto/GetProductoByIdSlice";
import DeleteProductoReducer from "./slice/Producto/DeleteProductoSlice";
import EditProductoReducer from "./slice/Producto/EditProductoSlice";
import CreateProductoReducer from "./slice/Producto/CreateProductoSlice";


export const store = configureStore({
    reducer: {
        form: formReducer, 
        formGroup: formGroupReducer,
        formField: FormFieldReducer,
        fielType: FieldTypeReducer,
        filledForm: filledFormReducer,
        createCliente: CreateClienteReducer,
        editCliente: EditClienteReducer,
        deleteCliente: DeleteClienteReducer,
        getAllCliente: GetAllClienteReducer,
        getCliente: GetClienteReducer,
        createProducto: CreateProductoReducer,
        editProducto: EditProductoReducer,
        deleteProducto: DeleteProductoReducer,
        getProducto: GetProductoReducer,
        getAllProductos: GetAllProductoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


