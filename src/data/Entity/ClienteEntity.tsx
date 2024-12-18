export type CreateClienteEntity = {
    nombreCliente: string,
    cedula: string,
    telefono: string,
    direccion: string,
}

export type EditarClienteEntity = CreateClienteEntity & {
    idCliente: number,
}

export type ShowClienteEntity = {
    idCliente: number,
    nombreCliente: string,
    cedula: string,
    telefono: string,
    direccion: string,
}

