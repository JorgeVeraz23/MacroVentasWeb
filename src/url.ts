import { BASE_URL } from "../src/url/baseurl";

const API_PREFIX = "api/";
export const URL_API = `${BASE_URL}${API_PREFIX}`;

const CLIENTE_PREFIX = "Cliente/";

export const GETALL_CLIENTE = `${CLIENTE_PREFIX}GetAllClientes`
export const GET_CLIENTEBYID = (idCliente: number) => `${CLIENTE_PREFIX}GetById?id=${idCliente}`;
export const CREATE_CLIENTE = `${CLIENTE_PREFIX}CrearCliente`;
export const EDIT_CLIENTE = `${CLIENTE_PREFIX}ActualizarCliente`;
export const DELETE_CLIENTE = (idCliente: number) => `${CLIENTE_PREFIX}EliminarCliente?id=${idCliente}`;
export const SELECTOR_CLIENTE = `${CLIENTE_PREFIX}SelectorClientes`

const PRODUCTO_PREFIX = "Producto/";
export const GETALLPRODUCTOS = `${PRODUCTO_PREFIX}GetAllProductos`;
export const GETPRODUCTO_BYID = (idProducto: number) => `${PRODUCTO_PREFIX}GetProductoById?id=${idProducto}`;
export const SELECTOR_PRODUCTO = `${PRODUCTO_PREFIX}SelectorProducto`;
export const CREATE_PRODUCTO = `${PRODUCTO_PREFIX}CrearProducto`;
export const EDIT_PRODUCTO = `${PRODUCTO_PREFIX}ActualizarProducto`;
export const DELETE_PRODUCTO = (idProducto: number) => `${PRODUCTO_PREFIX}EliminarProducto?id=${idProducto}`;

const CATEGORIAPRODUCTO_PREFIX = "CategoriaProducto/";
export const SELECTORCATEGORIA_PRODUCTO = `${CATEGORIAPRODUCTO_PREFIX}SelectorCategoriaProducto`;

const VENTA_PREFIX = "Ventas/";
export const GETALL_VENTAS = `${VENTA_PREFIX}GetAllVentas`;
export const CREATE_VENTAS = `${VENTA_PREFIX}CrearVenta`;
export const GETVENTA_BYID = (id: number) => `${VENTA_PREFIX}GetVentaByID?id=${id}`;
export const REPORTE_VENTAS = (fechaDesde: string, fechaHasta: string) => `${VENTA_PREFIX}ObtenerReporte?FechaInicio=${fechaDesde}&FechaFin=${fechaHasta}`;

const USUARIO_PREFIX = "Usuario/";
export const SELECTOR_USUARIO = `${USUARIO_PREFIX}SelectorUsuario`;