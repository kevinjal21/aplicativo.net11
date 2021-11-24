import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = 'http://192.168.0.5:5000/api/auth/';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/Auth/login', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  getUserProfile() {
    return this.http.get(this.baseUrl + 'api/Usuario');
  }
  getNombreLocalStore(): string {
    return localStorage.getItem('nombres');
  }
  getApellidoLocalStore(): string {
    return localStorage.getItem('apellidos');
  }
  getCorreoLocalStore(): string {
    return localStorage.getItem('email');
  }
  getRolLocalStore(): string {
    return localStorage.getItem('rol');
  }
  getCodigoUserLocalStore(): number {
    return Number(localStorage.getItem('codigoU'));
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/Auth/register', data)
      .pipe(
        tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}