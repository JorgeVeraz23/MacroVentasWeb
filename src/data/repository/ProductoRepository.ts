import { ApiResponse } from "data/Entity/ApiResponseEntity";
import {  SelectorEntity } from "data/Entity/KeyValueEntity";
import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "../Entity/ProductoEntity";

export default interface IProductoRepository {
    getAllProducto(): Promise<ShowProductoEntity[]>;
    selectorProducto(): Promise<SelectorEntity[]>;
    getProductoById(id: number): Promise<EditarProductoEntity>;
    createProducto(data: CreateProductoEntity): Promise<ApiResponse>;
    editProducto(data: EditarProductoEntity): Promise<ApiResponse>;
    deleteProducto(id: number): Promise<ApiResponse>;
}

