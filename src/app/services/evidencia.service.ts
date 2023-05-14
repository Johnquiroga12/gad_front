import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Evidencia } from '../models/Evidencia';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {
  evidenciaObj: Evidencia[] = [];
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  crear(r:any):Observable<any>{
    return this.http.post<any>( `${baserUrl}/api/evidencia/crear`, r
    );
  }

  actualizar(id: any, crite:any):Observable<any>{
    return this.http.put(`${baserUrl}/api/evidencia/actualizar/${id}`, crite);
  }
   //Metodo para listar
 
  getEvidencias():Observable<Evidencia[]>{
    return this.http.get<Evidencia[]>(`${baserUrl}/api/evidencia/listarv`);
  }
  

  eliminarEvidencia(evi:any): Observable<any> {
    return this.http.put(`${baserUrl}/api/evidencia/eliminarlogic/${evi.id_evidencia}`,evi);
 }
}
