import { Update } from "@reduxjs/toolkit";
import { loginEntity, LoginResponse } from "../entities/UserEntity/userEntity";

export default interface UsuarioRepository {
    login(data: loginEntity): Promise<LoginResponse>;
}
