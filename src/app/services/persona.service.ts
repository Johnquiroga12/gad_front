import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Persona2 } from './Persona2';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  private guardar: string = "http://localhost:5000/api/savP";

  //private listar:string="http://localhost:5000/api/personadocente/listardoce";
  private listar: string = " http://localhost:5000/api/persona/listar";


  private borrar: string = 'http://localhost:8080/api/delP';
  private buscar: string = "http://localhost:8080/api/busc";
  private edit: string = "http://localhost:8080/api/modiP";

  private url: string = 'http://localhost:5000/api/persona';

  personaObj: Persona[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }


  //Metodo para listar
  getPersonas(): Observable<Persona2[]> {
    return this.http
      .get(this.listar)
      .pipe(map((response) => response as Persona2[]));
  }

  //metodo para crear una persona
  public createPersona(persona: Persona2): Observable<any> {
    return this.http.post(this.url + '/crear', persona).pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }


}
