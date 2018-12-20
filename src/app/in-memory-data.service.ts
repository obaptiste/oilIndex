import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import { Oil } from './oil';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const oils = [
      {id: 1, name: 'Lavender' },
      {id: 2, name: 'Rosemary' },
      {id: 3, name: 'Oregano' },
      {id: 4, name: 'Copaiba' },
      {id: 5, name: 'Neroli' },
      {id: 6, name: 'Eucalyptus' },
      {id: 7, name: 'Sandlewood' },
      {id: 8, name: 'Pettigrain' },
      {id: 9, name: 'Palmarosa' },
      {id: 10, name: 'Melissa' },
      {id: 11, name: 'Jatamansi' },
      {id: 12, name: 'Ylang Ylang' },
      {id: 13, name: 'Cinammon' },
      {id: 14, name: 'Tea Tree' },
    ];
    return {oils};
  }


  genId(oils: Oil[]): number {
    return oils.length > 0 ?
    Math.max(...oils.map(oil => oil.id)) + 1 : 11;
  }
 // constructor() { }
}
