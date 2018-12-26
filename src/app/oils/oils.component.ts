import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { OilService } from '../oil.service';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.css']
})

export class OilsComponent implements OnInit {
  

  oils: Oil[];

  constructor(private oilService: OilService) {  }


  ngOnInit() {
    this.getOils();
    
  }

   getOils(): void {
    this.oilService.getOils()
      .subscribe(oils => this.oils = oils);
   }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.oilService.addOil({ name } as Oil)
    .subscribe(oil => {
      this.oils.push(oil);
    });
  }

  delete(oil: Oil): void {
    this.oils = this.oils.filter(o => o !== oil);
    this.oilService.deleteOil(oil).subscribe();
  }


}
