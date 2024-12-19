import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { SelectorEntity } from "data/Entity/KeyValueEntity";

export default interface IUsuarioRepository {
    selectorUsuario(): Promise<SelectorEntity[]>;
}

