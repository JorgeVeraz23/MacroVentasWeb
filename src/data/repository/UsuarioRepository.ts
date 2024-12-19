import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { KeyValueEntity } from "data/Entity/KeyValueEntity";
// import { CreateProductoEntity, EditarProductoEntity, ShowProductoEntity } from "../Entity/ProductoEntity";

export default interface IUsuarioRepository {
    selectorUsuario(): Promise<KeyValueEntity[]>;
}

