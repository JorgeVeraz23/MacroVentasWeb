import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";

import {  SELECTOR_FORMFIELD } from "../../url/url";

import { KeyValueEntity, SelectorEntity } from "data/Entity/KeyValueEntity";
import IClienteRepository from "../../data/repository/ClienteRepository";
import { CreateClienteEntity, EditarClienteEntity, ShowClienteEntity } from "data/Entity/ClienteEntity";
import { CREATE_CLIENTE, DELETE_CLIENTE, EDIT_CLIENTE, GET_CLIENTEBYID, GETALL_CLIENTE, SELECTOR_CLIENTE } from "../../url";
import { ApiResponse } from "data/Entity/ApiResponseEntity";

export default class ClienteRepositoryImpl implements IClienteRepository {

    async getAllCliente(): Promise<ShowClienteEntity[]> {
        try {
            const response = await axiosClient.get(GETALL_CLIENTE);
            const result: ShowClienteEntity[] = response.data.map((item: ShowClienteEntity) => ({
                idCliente: item.idCliente,
                cedula: item.cedula,
                nombreCliente: item.nombreCliente,
                direccion: item.direccion,
                telefono : item.telefono,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
    
    
    async selectorCliente(): Promise<SelectorEntity[]> {
        try {
            const response = await axiosClient.get(SELECTOR_CLIENTE);
            const result: SelectorEntity[] = response.data.map((item: any) => ({
                value: item.value,
                label: item.label,
            }));

            console.log(":VVV", JSON.stringify(result))
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
    

    async getClienteById(id: number): Promise<EditarClienteEntity> {
        try {
            const response = await axiosClient.get(GET_CLIENTEBYID(id));
            const result: EditarClienteEntity = {
                idCliente: response.data.idCliente,
                cedula: response.data.cedula,
                nombreCliente: response.data.nombreCliente,
                direccion: response.data.direccion,
                telefono : response.data.telefono,
            };
            return result; 
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }

    async deleteCliente(id: number): Promise<ApiResponse> {
        try {
            const response = await axiosClient.delete<ApiResponse>(DELETE_CLIENTE(id));
            if(response.status == 200){
                return response.data;
            }
           
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }

    async createCliente(data: CreateClienteEntity): Promise<ApiResponse> {
        try {
            const response = await axiosClient.post(CREATE_CLIENTE, data);
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

    async editCliente(data: EditarClienteEntity): Promise<ApiResponse> {
        return await axiosClient.put(EDIT_CLIENTE, data).then(async (response) => {
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
