import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import { VentaDetalle, MostrarVentaDetalle, CreateVenta, MostrarVenta } from "../Entity/VentaEntity";

export default interface IVentaRepository {
    // getAllVenta(): Promise<MostrarVenta[]>;
    // // selectorProducto(): Promise<KeyValueEntity[]>;
    // // getProductoById(id: number): Promise<EditarProductoEntity>;
    createVenta(data: CreateVenta): Promise<ApiResponse>;
    // // editProducto(data: EditarProductoEntity): Promise<ApiResponse>;
    // deleteProducto(id: number): Promise<ApiResponse>;
}

