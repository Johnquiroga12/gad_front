import { Actividades } from "../services/actividades";

export class Archivo {
  geteviasig(username: any) {
    throw new Error('Method not implemented.');
  }
  id_archivo: number = 0;
  enlace: string = "";
  nombre: string = "";
  descripcion: string = "";
 actividad:Actividades|null=null;

  visible: string = "";
 // indicador:Indicador | null = null;
}

