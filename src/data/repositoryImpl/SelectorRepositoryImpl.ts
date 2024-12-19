import axiosClient from "../../api/apiClient";
import { AxiosException } from "../../api/exception";


import { SelectorEntity } from "data/Entity/KeyValueEntity";
import { SELECTORCATEGORIA_PRODUCTO } from "../../url";
import ISelectorRepository from "data/repository/SelectorRepository";

export default class SelectorRepositoryImpl implements ISelectorRepository {

    async selectorCategoria(): Promise<SelectorEntity[]> {
        try {
            const response = await axiosClient.get(SELECTORCATEGORIA_PRODUCTO);
            const result: SelectorEntity[] = response.data.map((item: SelectorEntity) => ({
                 value: item.value,
                 label: item.label,
            }));
            return result;
        } catch (error) {
            throw new Error(AxiosException(error));
        }
    }
    
 
}
