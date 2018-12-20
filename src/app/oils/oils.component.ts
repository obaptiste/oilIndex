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

}
