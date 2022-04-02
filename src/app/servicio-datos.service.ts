import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { Experiencia } from './xp-model';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  xpUrl = 'api/xp';    //url de la api, usar la verdadera con el server

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }



  /** menejo de errores en el htttp y que la app no se cuelgue
 
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // metodos CRUD

  getXps(): Observable<[]> {
    return this.http.get<[]>(this.xpUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<[]>('getXps', []))
    );
  };


  /** GET xp por id. con 404 si no se encuentra */
getXp(id: number): Observable<any> {
  const url = `${this.xpUrl}/${id}`;
   return this.http.get<Experiencia>(url).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError<any>(`getXp id=${id}`))
  );
}

  // PUT: modificar la xp en el sserver 
  updateXp(xp: Experiencia): Observable<any> {
    return this.http.put(this.xpUrl, xp, this.httpOptions).pipe(
      tap(_ => console.log(`xp id=${xp.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteXp(xp: Experiencia): Observable<any> {
    const url = `${this.xpUrl}/${xp.id}`;

    return this.http.delete<Experiencia>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted xp id=${xp.id}`)),
      catchError(this.handleError<Experiencia>('deleteXp'))
    );
  }

  addXp(xp: Experiencia): Observable<any> {
    return this.http.post<Experiencia>(this.xpUrl, xp, this.httpOptions).pipe(
      tap((newXp: Experiencia) => console.log(`se agrego xp con id=${newXp.id}`)),
      catchError(this.handleError<Experiencia>('addXp'))
    );
  }

}

