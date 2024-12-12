// import { CreateCasoEntity, EditCasoEntity, ShowCasoEntity } from "../entities/Entities/CasoEntity";
import { ApiResponse } from "../entities/Entities/ApiResponse";
import { CreateMotivoEntity, EditMotivoEntity, ShowMotivoEntity } from "../entities/Entities/MotivoEntity";

export default interface MotivoRepository {
    getAllMotivo(): Promise<ShowMotivoEntity[]>;
    getMotivoById(id: number): Promise<EditMotivoEntity>;
    createMotivo(data: CreateMotivoEntity): Promise<ApiResponse>;
    editMotivo(data: EditMotivoEntity): Promise<ApiResponse>;
    deleteMotivo(id: number): Promise<ApiResponse>;
}