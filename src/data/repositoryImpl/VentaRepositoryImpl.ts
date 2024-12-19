import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";


import { KeyValueEntity } from "data/Entity/KeyValueEntity";

import { CREATE_PRODUCTO, DELETE_PRODUCTO, EDIT_PRODUCTO, GETPRODUCTO_BYID, GETALLPRODUCTOS, SELECTOR_PRODUCTO } from "../../url";
import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "data/Entity/ProductoEntity";
import { ApiResponse } from "data/Entity/ApiResponseEntity";
import IProductoRepository from "data/repository/ProductoRepository";
import IVentaRepository from "data/repository/VentaRepository";
import { MostrarVenta } from "data/Entity/VentaEntity";

export default class VentaRepositoryImpl implements IVentaRepository {

    // async getAllVenta(): Promise<MostrarVenta[]> {
    //     try {
    //         const response = await axiosClient.get(GETALLPRODUCTOS);
    //         const result: MostrarVenta[] = response.data.map((item: MostrarVenta) => ({
    //             : item.idVentas,
    //             nombreProducto: item,
    //             codigoProducto: item.codigoProducto,
    //             stock: item.stock,
    //             precio : item.precio,
    //             idCategoriaProducto: item.idCategoriaProducto,
    //             nombreCategoriaProducto: item.nombreCategoriaProducto,
    //         }));
    //         return result;
    //     } catch (error) {
    //         throw new Error(AxiosException(error));
    //     }
    // }

k
}

