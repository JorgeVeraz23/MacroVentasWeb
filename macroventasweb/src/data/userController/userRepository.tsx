
import {LoginEntity} from "../types/userInterfaces";
import {ApiResponse}  from "../types/ApiResponse"

export default interface UserRepository {
    loginUsuario(data: LoginEntity): Promise<ApiResponse>;
}