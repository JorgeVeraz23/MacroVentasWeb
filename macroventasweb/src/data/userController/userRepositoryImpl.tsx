import axiosClient from "../../httpClient/axiosClients";
import {AxiosException} from "../../httpClient/errors"
import { ApiResponse } from "../types/ApiResponse";
import { LoginEntity } from "../types/userInterfaces";
//URL
import {LOGIN_USUARIO} from "../url/url";
import UserRepository from "./userRepository";
//Repository



export default class UserRepositoryImpl implements UserRepository {






  async loginUsuario(data: LoginEntity): Promise<ApiResponse> {
    try {
        const response = await axiosClient.post(LOGIN_USUARIO(data));

        console.log('Request data:', data); // Agrega este console.log para ver los datos enviados en la solicitud

        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error('Error occurred:', error);
        throw new Error(AxiosException(error));
    }
}



  
}