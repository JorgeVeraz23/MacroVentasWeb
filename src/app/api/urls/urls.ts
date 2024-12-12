import { BASE_URL } from "../../utils/web.example.config";
import { loginEntity, LoginResponse } from "../domain/entities/UserEntity/userEntity";

const API_PREFIX = "api/";
export const URL_API = `${BASE_URL}${API_PREFIX}`;



//Security
const CLIENTE_PREFIX = "Cliente/";
export const CREATE_USER = `${CLIENTE_PREFIX}CrearCliente`;
export const EDIT_USER = `${CLIENTE_PREFIX}ActualizarCliente`;

const USUARIO_PREFIX = "Usuario/";

export const LOGIN = (data: loginEntity) => `${USUARIO_PREFIX}Login?correo=${data.correo}&contrasenia=${data.contrasenia}`;

