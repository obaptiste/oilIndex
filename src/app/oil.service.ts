import { Injectable } from '@angular/core';
import { Oil } from './oil';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class OilService {

  private oilsUrl = 'api/oils';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
      
    }

    /** Get Oils from the server */

  getOils(): Observable<Oil[]> {
   // send the message _after_ fetching the heroes
   //this.messageService.add('OilService: fetched heroes'); 
   return this.http.get<Oil[]>(this.oilsUrl)
    .pipe(
      tap(_ => this.log('fetched oils')),
      catchError(this.handleError('getOils', []))
    );
  }

  getOil(id: number): Observable<Oil> {
   const url = `${this.oilsUrl}/${id}`;
   return this.http.get<Oil>(url).pipe(
     tap(_ => this.log(`fetched oil id=${id}`)),
     catchError(this.handleError<Oil>(`getHero id=${id}`))
   );
  }

  private log(message: string) {
    this.messageService.add(`OilService: ${message}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
