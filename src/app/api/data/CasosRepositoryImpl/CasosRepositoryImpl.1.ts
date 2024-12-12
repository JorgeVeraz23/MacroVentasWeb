// import CasosRepository from "../../domain/repositories/CasosRepository";
// import axiosClient from "../../httpClient/axiosClient";
// import { AxiosException } from "../../../errors/exceptions";
// import { CreateCasosEntity, EditCasosEntity, ShowCasosEntity } from "../../domain/entities/Entities/CasosEntity";
// import { GETALL_CASOS, CREATE_CASO, DELETE_CASO, UPDATE_CASO, GET_CASO } from "../../urls/urls";
// import axios from "axios";
// export default class CasosRepositoryImpl implements CasosRepository {
//     private readonly token: string | null;

//     constructor() {
//         this.token = localStorage.getItem("Token");
//     }

//     async  getAllCasos(): Promise<ShowCasosEntity[]> {
//         return await axiosClient.get(GETALL_CASOS, {
//             headers: {
//                 'Authorization': `Bearer ${this.token}`,
//             }
//         }).then(async (response) => {
//             const result: ShowCasosEntity[] = [];
//             for(const item of response.data){
//                 console.log("xd",response.data);
//                 result.push({
//                     idCasos: item.idCasos,
//                     caso: item.caso,
//                     motivo: item.motivo,
//                     subMotivo: item.subMotivo,
//                     idTipoFicha: item.idTipoFicha
//                 })
//             }
//             return result;
//         }).catch(error => {
//             throw new Error(AxiosException(error));
//         });
//     }

    
// //   async getAllClients(): Promise<ShowClientEntity[]> {
// //     return await axiosClient.get(GETALL_CLIENTS, {
// //       headers: {
// //         'Authorization': `Bearer ${this.token}`,
// //       },
// //     }).then(async (response) => {
// //       const result : ShowClientEntity[] = [];
// //       console.log(response.data)
// //       for(const item of response.data){
// //         result.push({
// //           idClient: item.idClient,
// //           nameClient: item.nameClient, 
// //           typeDocument: item.typeDocument,
// //           textTypeDocument: item.textTypeDocument,
// //           dniNumber: item.dniNumber,
          
// //         });
// //       }
// //       return result;
// //     }).catch(error => {
// //       throw new Error(AxiosException(error));
// //     });
// //   }

//     async getCasoById(id: number): Promise<EditCasosEntity> {
//         return await axiosClient.get(GET_CASO(id), {
//             headers: {
//                 'Authorization': `Bearer ${this.token}`,
//             },
//         }).then(async (response) => {
//             console.log(response.data)
//             const result: EditCasosEntity = {
//                 idCasos: response.data.idCasos,
//                 caso: response.data.caso,
//                 motivo: response.data.motivo,
//                 subMotivo: response.data.subMotivo,
//                 idTipoFicha: response.data.idTipoFicha
//             }
//             return result;
//         }).catch(error => {
//             throw new Error(AxiosException(error));
//         });
//     }

//     async createCaso(data: CreateCasosEntity): Promise<boolean> {
//         try {
//             const response = await axiosClient.post(CREATE_CASO, data, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${this.token}`,
//                 },

//             });
//             console.log('Respuesta de datos creados', data);
//             if(response.status === 200){
//                 console.log(response.data);
//                 return true;
//             }else{
//                 throw new Error(response.statusText);
//             }
//         }catch(error){
//             console.log('Ocurrio un error', error);
//             throw new Error(AxiosException(error));
//         }
//     }

//     async editCaso(data: EditCasosEntity): Promise<boolean> {
//         return await axiosClient.put(UPDATE_CASO, data, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${this.token}`,
//             },
//         }).then(async (response) => {
//             if(response.status == 200){
//                 return true;
//             }else{
//                 throw new Error(response.statusText);
//             }
//         }).catch(error => {
//             throw new Error(AxiosException(error));
//         })
//     }

//     async deleteCaso(id: number): Promise<boolean> {
//         return await axiosClient.delete(DELETE_CASO(id), {
//             headers: {
//                 'Authorization': `Bearer ${this.token}`,
//             },
//         }).then(async (response) => {
//             if(response.status == 200){
//                 return true;
//             }else {
//                 throw new Error(response.statusText);
//             }
//         }).catch(error => {
//             throw new Error(AxiosException(error));
//         })    
//     }
// }
