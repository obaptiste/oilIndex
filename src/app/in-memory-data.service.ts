import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import { Oil } from './oil';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const oils = [
      {id: 1, name: 'Lavender', description: "relaxing, burn ointment" },
      {id: 2, name: 'Rosemary', description: "memory" },
      {id: 3, name: 'Oregano', description: "anti-inflammatory" },
      {id: 4, name: 'Copaiba', description: "relaxing, burn ointment" },
      {id: 5, name: 'Neroli', description: "relaxing, burn ointment" },
      {id: 6, name: 'Eucalyptus', description: "decongestant" },
      {id: 7, name: 'Sandlewood', description: "aphrodisiac" },
      {id: 8, name: 'Pettigrain', description: "calms sudden angry outbursts" },
      {id: 9, name: 'Palmarosa', description: "" },
      {id: 10, name: 'Melissa',  },
      {id: 11, name: 'Jatamansi' },
      {id: 12, name: 'Ylang Ylang' },
      {id: 13, name: 'Cinnammon' },
      {id: 14, name: 'Tea Tree' },
      {id:15, name: 'Bog Myrtle'},
      {id:16, name: 'Jasmin'},
      {id:17, name: 'Jatamansi'},
      {id: 18, name: 'Rose'},
      {id:19, name: 'Lemon'},
      {id:20, name: 'Orange'},
      {id:21, name: 'Pink Grapefruit'},
      {id:22, name: 'Borage'},
    ];
    return {oils};
  }


  genId(oils: Oil[]): number {
    return oils.length > 0 ?
    Math.max(...oils.map(oil => oil.id)) + 1 : 11;
  }
 // constructor() { }
}
