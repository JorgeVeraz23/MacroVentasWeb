// import { CreateGestorReclamoEntity, EditarGestorReclamoEntity, ShowGestorReclamoEntity } from "../entities/Entities/GestorReclamoEntity";
import { MostrarClienteData } from "../entities/Entities/ClienteEntity";


export default interface ClienteRepository {
    getAllClienteData(codcliente: string): Promise<MostrarClienteData>;
}