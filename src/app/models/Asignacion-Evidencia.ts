import { Usuario2 } from '../services/Usuario2';
import { Evidencia } from './Evidencia';

export class Asigna_Evi {
  id_asignacion_evidencia: number = 0;
  evidencia: Evidencia = new Evidencia();
  usuario: Usuario2 = new Usuario2();
  visible: boolean = true;
}
/*
interface Evidencia{
    id_evidencia: number ;
    enlace:String;
    nombre:String ;
    visible:boolean;
}

interface usuario{
    id: number;
    username: string ;
    pasword: string ;
    estado: string;
}*/
