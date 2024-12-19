export type VentaDetalle = {
    idVentaDetalle: number; // ID del detalle de la venta
    cantidad: number; // Cantidad del producto vendido
    subTotal: number; // Subtotal del detalle
    idProducto: number; // ID del producto vendido
    idVentas: number; // ID de la venta a la que pertenece este detalle
  };
  
  export type CreateVenta = {
    idVentas: number; // ID de la venta
    idCliente: number; // ID del cliente
    userId: number; // ID del usuario que realiza la venta
    ventaDetalles: VentaDetalle[]; // Lista de detalles de la venta
  };
  
  export type MostrarVentaDetalle = {
    idVentaDetalle: number; // ID del detalle de la venta
    cantidad: number; // Cantidad del producto vendido
    subTotal: number; // Subtotal del detalle
    nombreProducto: string; // Nombre del producto vendido
    idVentas: number; // ID de la venta a la que pertenece este detalle
  };
  
  export type MostrarVenta = {
    idVentas: number; // ID de la venta
    totalVenta: number; // Total de la venta
    iva: number; // IVA aplicado a la venta
    empleado: string; // Nombre del empleado que realizó la venta
    ventaDetalles: MostrarVentaDetalle[]; // Lista de detalles de la venta
  };
  


  //xdddd

  export type DetalleVentaReporte = {
    idProducto: number; // ID del producto
    producto: string; // Nombre del producto
    cantidad: number; // Cantidad vendida
    subTotal: number; // Subtotal del producto
  };
  
  export type ProductoEnStockReporte = {
    idProducto: number; // ID del producto
    nombreProducto: string; // Nombre del producto
    stock: number; // Cantidad disponible en stock
    precio: number; // Precio por unidad
    bajoStock: boolean; // Indica si el stock es bajo
  };
  
  export type VentaReporte = {
    idVentas: number; // ID de la venta
    fechaCreacion: string; // Fecha de creación de la venta
    totalVenta: number; // Total de la venta
    iva: number; // IVA aplicado a la venta
    detalles: DetalleVentaReporte[]; // Lista de detalles de la venta
    productoEnStock: ProductoEnStockReporte[]; // Lista de productos en stock
  };
  
//   // Tipo para la lista de ventas (respuesta del endpoint)
//   export type VentasResponse = Venta[];
  