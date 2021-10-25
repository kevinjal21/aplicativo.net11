import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Documento } from '../models/documento';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class DocumentoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addCliente(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(this.baseUrl + 'api/Documento', documento, httpOptions).pipe(
      tap((newDocumento: Documento) => this.log(`added NewSocio w/ id=${newDocumento.codocumento}`)),
      catchError(this.handleError<Documento>('addCliente'))
    );
  }

  getCliente(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.baseUrl + 'api/Documento')
      .pipe(
        // tap(_ => this.log("Lista Cargada")),
        catchError(this.handleError<Documento[]>('getCliente', []))
      );
  }

  get(id: string): Observable<Documento> {
    const url = `${this.baseUrl + 'api/Documento'}/${id}`;
    return this.http.get<Documento>(url).pipe(
    );
  }

  update (documento: Documento): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/Documento'}/${documento.codocumento}`;
    return this.http.put(url, documento, httpOptions).pipe(
    tap(_ => this.log(`updated documento isbn=${documento.codocumento}`)),
    catchError(this.handleError<any>('documento'))
    );
    }


  delete (documento: Documento | string): Observable<Documento> {
    const id = typeof documento === 'string' ? documento : documento.codocumento;
    const url =
    
    `${this.baseUrl + 'api/Documento'}/${id}`;
    
    return this.http.delete<Documento>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted documento isbn=${id}`)),
    catchError(this.handleError<Documento>('deleteTask'))
    );
    }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} Fallo Listado: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`ServicioCliente: ${message}`);
  }
}