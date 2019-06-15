import { Injectable } from '@angular/core';
import { Oil } from './oil';
import { Observable, of } from 'rxjs';
import { Headers, Http } from '@angular/http';


import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';
import { NEXT } from '@angular/core/src/render3/interfaces/view';



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class OilService {

  private headers = new Headers({'Content-Type': 'application/json'});
  endpoint = "oils"
  private oilsUrl = 'http://localhost:3000/' + this.endpoint;  // URL to web api
  oilsList = []
  oilsd = []
  constructor(private http: Http) {  }

   
    /** Get Oils from the server */

  getOils(): Observable <Oil[]> {
    const url = `${this.oilsUrl}`; 
    let grab = this.http.get(url);
    grab.subscribe((data) => {
      this.oilsList = data.json() as Oil[];     
      console.log(this.oilsList)
    });
    
    return;
   }

  // fetchOils() {
  //   return fetch(this.oilsUrl + this.endpoint)
  //     .next(
  //       function(response) {
  //         if (response.status !== 200) {
  //           console.log('Looks like we have a problem getting oils. Status code: ' + response.status);
  //           return;
  //         }
  //         // Examine the text in the response
  //         response.json().then(function(data) {
  //           console.log(data);
            
  //         });
  //       }
  //     )
  //     .catch(function(err) {
  //       console.log('Fetch Error :-S', err);
  //     });
  //   }

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
   const oil = this.http.get(url)
   .subscribe(data => data.json() as Oil[]);
   console.log(oil);
   return;
  }
  /** Update oils on the server */
 
  update(oil: Oil): Observable<Oil> {
    const url = `${this.oilsUrl}/${oil.id}`;
     this.http
    .put(url, JSON.stringify(oil), {headers: this.headers})
    .subscribe(() => oil)
    return;
  }
  /** POST: add a new oil to the server */
  create (name: string): Observable<Oil> {
     this.http
    .post(this.oilsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .subscribe(data => data.json() as Oil);
    console.log("yo");
    return;
  }

  /** DELETE: delete the oil from the server */

  deleteOil (id: number): Observable<void> {
    const url = `${this.oilsUrl}/${id}`;
    this.http.delete(url, {headers: this.headers})
    .subscribe(res => res.json().data as Oil);
    return
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}