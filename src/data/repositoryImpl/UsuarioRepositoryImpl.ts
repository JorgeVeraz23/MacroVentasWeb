import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";


import { SelectorEntity } from "data/Entity/KeyValueEntity";
import { SELECTOR_USUARIO } from "../../url";
import IUsuarioRepository from "data/repository/UsuarioRepository";

export default class UsuarioRepositoryImpl implements IUsuarioRepository {


    
    async selectorUsuario(): Promise<SelectorEntity[]> {
        try {
            const response = await axiosClient.get(SELECTOR_USUARIO);
            const result: SelectorEntity[] = response.data.map((item: any) => ({
                value: item.value,
                label: item.label,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
}