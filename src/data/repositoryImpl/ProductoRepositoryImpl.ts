import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";


import { KeyValueEntity } from "data/Entity/KeyValueEntity";
// import { CreateClienteEntity, EditarClienteEntity, ShowClienteEntity } from "data/Entity/ClienteEntity";
import { CREATE_PRODUCTO, DELETE_PRODUCTO, EDIT_PRODUCTO, GETPRODUCTO_BYID, GETALLPRODUCTOS, SELECTOR_PRODUCTO } from "../../url";
import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "data/Entity/ProductoEntity";
import { ApiResponse } from "data/Entity/ApiResponseEntity";
import IProductoRepository from "data/repository/ProductoRepository";

export default class ProductoRepositoryImpl implements IProductoRepository {

    async getAllProducto(): Promise<ShowProductoEntity[]> {
        try {
            const response = await axiosClient.get(GETALLPRODUCTOS);
            const result: ShowProductoEntity[] = response.data.map((item: ShowProductoEntity) => ({
                idProducto: item.idProducto,
                nombreProducto: item.nombreProducto,
                codigoProducto: item.codigoProducto,
                stock: item.stock,
                precio : item.precio,
                idCategoriaProducto: item.idCategoriaProducto,
                nombreCategoriaProducto: item.nombreCategoriaProducto,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
    
    
    async selectorProducto(): Promise<KeyValueEntity[]> {
        try {
            const response = await axiosClient.get(SELECTOR_PRODUCTO);
            const result: KeyValueEntity[] = response.data.map((item: any) => ({
                Key: item.Key,
                Value: item.Value,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
    

    async getProductoById(id: number): Promise<EditarProductoEntity> {
        try {
            const response = await axiosClient.get(GETPRODUCTO_BYID(id));
            const result: EditarProductoEntity = {
                idProducto: response.data.idProducto,
                nombreProducto: response.data.nombreProducto,
                codigoProducto: response.data.codigoProducto,
                stock: response.data.stock,
                precio : response.data.precio,
                idCategoriaProducto: response.data.idCategoriaProducto,
            };
            return result; 
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }

    async deleteProducto(id: number): Promise<ApiResponse> {
        try {
            const response = await axiosClient.delete<ApiResponse>(DELETE_PRODUCTO(id));
            if(response.status == 200){
                return response.data;
            }
           
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }

    async createProducto(data: CreateProductoEntity): Promise<ApiResponse> {
        try {
            const response = await axiosClient.post(CREATE_PRODUCTO, data);
            console.log('Respuesta de datos creados', data);
            if(response.status === 200){
                console.log(response.data);
                return response.data;
            }else{
                throw new Error(response.statusText);
            }
        }catch(error){
            console.log('Ocurrio un error', error);
            throw new Error(AxiosException(error));
        }
    }

    async editProducto(data: EditarProductoEntity): Promise<ApiResponse> {
        return await axiosClient.put(EDIT_PRODUCTO, data).then(async (response) => {
            if(response.status == 200){
                return response.data;
            }else{
                throw new Error(response.statusText);
            }
        }).catch(error => {
            throw new Error(AxiosException(error));
        })
    }
}
