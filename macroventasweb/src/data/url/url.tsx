
import { BASE_URL } from "../../web.config";
const API_PREFIX = "api/";
export const URL_API = `${BASE_URL}${API_PREFIX}`;
import {LoginEntity} from "../types/userInterfaces"



//PRODUCTO
const PRODUCTO_PREFIX = "Producto/";
export const CREATE_PRODUCTO = `${PRODUCTO_PREFIX}CrearProducto`;
export const UPDATE_PRODUCTO = `${PRODUCTO_PREFIX}ActualizarProducto`;
export const GETALL_PRODUCTO = `${PRODUCTO_PREFIX}GetAllProductos`;
export const GETPRODUCTO_BYID = `${PRODUCTO_PREFIX}`
export const DELETE_PRODUCTO = (id: number) =>`${PRODUCTO_PREFIX}EliminarProducto?id=${id}`;

//USUARIO
const USUARIO_PREFIX = "Usuario/";
export const LOGIN_USUARIO = (data: LoginEntity) =>`${USUARIO_PREFIX}Login?correo=${data.correo}&contrasenia=${data.contrasenia}`;
//CLIENTE
const CLIENTE_PREFIX = "Cliente/";
export const CREATE_CLIENTE = `${CLIENTE_PREFIX}CrearCliente`;
export const UPDATE_CLIENTE = `${CLIENTE_PREFIX}ActualizarCliente`;
export const GETALL_CLIENTE = `${CLIENTE_PREFIX}GetAllClientes`;
export const DELETE_CLIENTE = (id: number) => `${CLIENTE_PREFIX}EliminarCliente?id=${id}`;
export const GET_CLIENTE = (id: number) => `${CLIENTE_PREFIX}GetById?id=${id}`;
//VENTA


//REPORTES

