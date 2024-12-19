import { ApiResponse } from "data/Entity/ApiResponseEntity";
import { SelectorEntity } from "data/Entity/KeyValueEntity";

export default interface ISelectorRepository {
    selectorCategoria(): Promise<SelectorEntity[]>;
   
}

