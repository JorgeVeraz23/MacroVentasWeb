import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";


import { KeyValueEntity } from "data/Entity/KeyValueEntity";
import { SELECTOR_USUARIO } from "../../url";
import IUsuarioRepository from "data/repository/UsuarioRepository";

export default class UsuarioRepositoryImpl implements IUsuarioRepository {


    
    async selectorUsuario(): Promise<KeyValueEntity[]> {
        try {
            const response = await axiosClient.get(SELECTOR_USUARIO);
            const result: KeyValueEntity[] = response.data.map((item: any) => ({
                Key: item.Key,
                Value: item.Value,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
}