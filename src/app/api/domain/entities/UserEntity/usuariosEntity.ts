export type ShowUsuariosEntity = {
    value: string,
    Nombre: string,
    Apellido: string,
    Active: boolean,
    username: string,
}

export type RegisterUsuarioByAdminEntity =  {
    userName : string,
    firstName: string,
    lastName: string,
    rolName: string,
    identificacion: string,
    phoneNumber: string,
    password?: string,
    idEmpresa?: number,
    idSegmento?: number,
    idAreaReclamo?: number,
    idCargo?: number,
}



export type UpdateUserEntity = RegisterUsuarioByAdminEntity & {
    IdUser: string,
    nombreEmpresa?: string,
    nombreAreaReclamo?: string,
    nombreCargo?: string,
    nombreSegmento?: string,
}

export type ChangePasswordEntity = {
    userName: string,
    password: string,
}