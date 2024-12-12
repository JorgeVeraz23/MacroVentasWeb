export type CreateTicketEntity = {
    asunto: string,
    enumEstadoTicket?: number,
    idCliente: string,
    idGestor?: string,
}

export type EditarTicketEntity = CreateTicketEntity & {
    idTicket: number,
}

export type ShowTicketEntity = {
    idTicket: number,
    asunto: string,
    estadoTicket?: number,
    idCliente: string,
    idGestor?: string,
    clienteNombre: string,
    gestorNombre?: string,
}