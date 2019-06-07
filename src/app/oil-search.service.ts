import { Http }       from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Oil }           from './oil';
import { Injectable } from '@angular/core';

@Injectable()
export class OilSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Oil[]> {
    return this.http
               .get(`app/oils/?name=${term}`)
               .map(response => response.json().data as Oil[]);
  }
}
