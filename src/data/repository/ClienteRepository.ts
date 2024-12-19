import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { CreateClienteEntity, EditarClienteEntity, ShowClienteEntity } from "data/Entity/ClienteEntity";
import { FormGroupEntity } from "data/Entity/FormGroupEntity";
import { KeyValueEntity, SelectorEntity } from "data/Entity/KeyValueEntity";

export default interface IClienteRepository {
    getAllCliente(): Promise<ShowClienteEntity[]>;
    selectorCliente(): Promise<SelectorEntity[]>;
    getClienteById(id: number): Promise<EditarClienteEntity>;
    createCliente(data: CreateClienteEntity): Promise<ApiResponse>;
    editCliente(data: EditarClienteEntity): Promise<ApiResponse>;
    deleteCliente(id: number): Promise<ApiResponse>;
}

