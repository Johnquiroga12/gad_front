import { Injectable } from '@angular/core';
import { Ponderacion } from '../models/Ponderacion';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable, catchError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PonderacionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:5000/api/ponderacion';

  //metodo para crear 
  public guardarPonderacion(ponderacion:Ponderacion): Observable<any> {
    return this.http.post(this.url + '/crear', ponderacion).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
  //metodo para listar ponderacion
  public listarPonderacion(): Observable<Ponderacion[]> {
    return this.http
      .get(this.url + '/listar')
      .pipe(map((response) => response as Ponderacion[]));
  }

  //Listar por Id

  public getPonderacionById(id: number): Observable<Ponderacion> {

    return this.http.get<Ponderacion>(this.url + '/buscar/' + id);
  }

  actualizar(id: any, crite: any): Observable<any> {
    return this.http.put(`${this.url}/actualizar/${id}`, crite);
  }


  //Eliminar
  eliminarUsuario(id: any): Observable<Ponderacion> {
    return this.http.delete<Ponderacion>(this.url+ '/eliminar/' + id);
  }

}
