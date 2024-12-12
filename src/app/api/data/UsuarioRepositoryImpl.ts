import UsuarioRepository from "../domain/repositories/UsuarioRepository";
import axiosClient from "../httpClient/axiosClient";
import { AxiosException } from "../../../app/errors/exceptions";


// import { GETALL_AREARECLAMOS, GET_AREARECLAMO, DELETE_AREARECLAMO, UPDATE_AREARECLAMO, CREATE_AREARECLAMO } from "../../urls/urls";
import { loginEntity, LoginResponse } from "../domain/entities/UserEntity/userEntity";
import { LOGIN } from "../urls/urls";


export default class UsuarioRepositoryImpl implements UsuarioRepository {
    async login(data: loginEntity): Promise<LoginResponse> {
        try{

            const response = await axiosClient.post(LOGIN(data), );

            if(response.status === 200){
                return response.data;
            }else{
                throw new Error(response.statusText);
            }

        }catch(error){
            throw new Error(AxiosException(error))
        }
    }

  
}