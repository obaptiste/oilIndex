import { Injectable } from '@angular/core';
import { Oil } from './oil';
import { Observable, of } from 'rxjs';
import { Headers, Http } from '@angular/http';


import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class OilService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private oilsUrl = 'api/oils';  // URL to web api

  constructor(private http: Http) {  }

   
    /** Get Oils from the server */

  getOils(): Promise<Oil[]> {
    return this.http.get(this.oilsUrl)
    .toPromise()
    .then(response => response.json().data as Oil[])
    .catch(this.handleError);
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

  getOil(id: number): Promise<Oil> {
   const url = `${this.oilsUrl}/${id}`;
   return this.http.get(url)
   .toPromise()
   .then(response => response.json().data as Oil)
   .catch(this.handleError);
  }

  /** Update oils on the server */
 
  update(oil: Oil): Promise<Oil> {
    const url = `${this.oilsUrl}/${oil.id}`;
    return this.http
    .put(url, JSON.stringify(oil), {headers: this.headers})
    .toPromise()
    .then(() => oil)
    .catch(this.handleError);
  }

  /** POST: add a new oil to the server */
  create (name: string): Promise<Oil> {
    return this.http
    .post(this.oilsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Oil)
    .catch(this.handleError);
  }

  /** DELETE: delete the oil from the server */

  deleteOil (id: number): Promise<void> {
    const url = `${this.oilsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Oil)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}