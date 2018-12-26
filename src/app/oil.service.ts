import { Injectable } from '@angular/core';
import { Oil } from './oil';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class OilService {



  constructor(
    private http: HttpClient,
    private messageService: MessageService) {  }

    private oilsUrl = 'api/oils';

    
    /** Get Oils from the server */

  getOils(): Observable<Oil[]> {
   // send the message _after_ fetching the oils
   this.messageService.add('OilService: fetched oils'); 
   return this.http.get<Oil[]>(this.oilsUrl)
    .pipe(
      tap(_ => this.log('fetched oils')),
      catchError(this.handleError('getOils', []))
    );
  }

  /** Get oil by id. Return 'undefined' when id not found */


  // getOilNo404<Data>(id:number):
  // Observable<Oil> {
  //   const url = `${this.oilsUrl}/?id=${id}`;
  //   return this.http.get<Oil[]>(url)
  //     .pipe(
  //       map(oils => oils[0]), // returns a  {0|1} element array
  //       tap(o => {
  //         const outcome = o ? `fetched` : `did not find`;
  //         this.log(`${outcome} oil id=${id}`);
  //       }),
  //       catchError(this.handleError<Oil>
  //         (`getOil id=$`)
  //     )
//  }

  getOil(id: number): Observable<Oil> {
   const url = `${this.oilsUrl}/${id}`;
   return this.http.get<Oil>(url).pipe(
     tap(_ => this.log(`fetched oil id=${id}`)),
     catchError(this.handleError<Oil>(`getOil id=${id}`))
   );
  }

  /** Update oils on the server */
 
  updateOil (oil: Oil): Observable<any> {
    return this.http.put(this.oilsUrl, oil, httpOptions).pipe(
      tap(_ => this.log(`updated oil id=${oil.id}`)),
      catchError(this.handleError<any>('update oil'))
    );
  }

  /** POST: add a new oil to the server */
  addOil (oil: Oil): Observable<Oil> {
    return this.http.post<Oil>(this.oilsUrl, oil, httpOptions).pipe(
      tap((oil: Oil) => this.log(`added oil w/id=${oil.id}`)),
      catchError(this.handleError<Oil>('addOil'))
    );
  }

  /** DELETE: delete the oil from the server */

  deleteOil (oil: Oil | number): Observable<Oil> {
    const id = typeof oil === 'number' ? oil : oil.id;
    const url = `${this.oilsUrl}/${id}`;

    return this.http.delete<Oil>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted oil id=${id}`)),
      catchError(this.handleError<Oil>('deleteOil'))
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
