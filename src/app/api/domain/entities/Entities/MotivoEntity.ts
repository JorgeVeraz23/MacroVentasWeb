

export type CreateMotivoEntity = {
    nombre: string,
    idAreaEvaluada: number,
    codigoMotivo: string,
}

export type EditMotivoEntity = CreateMotivoEntity &{
    idMotivo: number,
}

export type ShowMotivoEntity = {
    idMotivo: number,
    nombre: string,
    areaEvaluada: string,
    codigoMotivo: string,
}