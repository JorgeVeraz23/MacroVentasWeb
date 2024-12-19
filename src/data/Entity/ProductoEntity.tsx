export type CreateProductoEntity = {
    nombreProducto: string,
    codigoProducto: number,
    stock: number,
    precio: number,
    idCategoriaProducto: number,
}

export type EditarProductoEntity = CreateProductoEntity & {
    idProducto: number,
}

export type ShowProductoEntity = {
    idProducto: number,
    nombreProducto: string,
    codigoProducto: number,
    stock: number,
    precio: number,
    idCategoriaProducto: number,
    nombreCategoriaProducto: number,
}

