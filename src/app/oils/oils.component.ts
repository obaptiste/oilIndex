import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { OilService } from '../oil.service';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.css'],
  providers: [OilService]
})

export class OilsComponent implements OnInit {
  

  oils: Oil[];
  selectedOil: Oil;

  constructor(private oilService: OilService) {  }


  ngOnInit() {
    this.oilService.getOils()
    .subscribe(() => this.oils as Oil[] );
  }

   getOils(): void {
    this.oilService.getOils()
      .subscribe(() => {
        oils => this.oils = oils;
        console.log(this.oils);
      })
   }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.oilService.create(name)
    .subscribe(() => {
      oil => this.oils.push(oil);
      this.selectedOil = null;
    });
  }

  delete(oil: Oil): void {
    this.oilService
      .deleteOil(oil.id)
      .subscribe(() => {
        this.oils = this.oils.filter(o => o !== oil);
        if (this.selectedOil === oil){ this.selectedOil = null;}
      });
  }


}
