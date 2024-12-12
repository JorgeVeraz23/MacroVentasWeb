export type UserEntity = {
    token?: string;
    role?: string;
    userName?: string;
    lastName?: string;
    firstName?: string;
}

export type loginEntity = {
    correo: string,
    contrasenia: string,
}

export type InitialStateLoginEntity = loginEntity & {
    correo: '',
    contrasenia: '',
}


export type LoginResponse = {
    message: string,
    user: string,
    idUser: number,
    detail: string,
    success: boolean,
    status: number,
}

export type initialStateLoginReponse = LoginResponse & {
    message: '',
    user: '',
    idUser: 0,
    detail: '',
    success: false,
    status: 0,
}



export type GetAllUsersEntity = { 
    idUser: string,
    identificacion: string,
    userName: string,
    rol: string,
    email: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    activo: boolean,
    nombreSegmento: string,
    nombreEmpresa: string,
    nombreAreaReclamo: string,
    nombreCargo: string,
    idSegmento: number,
    idEmpresa: number,
    idAreaReclamo: number,
}