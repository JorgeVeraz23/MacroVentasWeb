import { SelectorEntity } from "./SelectoresEntity/SelectorEntity";

// Define los tipos para las propiedades anidadas
type KeyValue = {
    key: string;
    value: string;
  }


  export type clienteContacto = {
    idClienteContacto: number,
    coD_CONTACTO: number,
    coD_CUENTA: number,
    deS_FUNCION: string,
    nuM_TELEFONO: string,
    deS_CORREO_ELECTRONICO: string,
    deS_NOMBRE_COMPLETO: string,
  }
  
  // Define el tipo principal para el objeto completo
  export type MostrarClienteData  = {
    idCliente: number;
    identificacion: string | null;
    nombre: string;
    coD_CLIENTE: string;
    nombreFinca: SelectorEntity[];
    nombreSector: SelectorEntity[];
    nombreNodo: SelectorEntity[];
    nombreGrupo: SelectorEntity[];
    clienteContacto: clienteContacto[],
  }