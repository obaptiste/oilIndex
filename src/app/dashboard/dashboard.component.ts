import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { OilService } from '../oil.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  oils: Oil[] = [];

  constructor(private oilService: OilService) { }

  ngOnInit() {
    this.getOils();
  }

  getOils(): void {
    this.oilService.getOils()
    .subscribe(oils => this.oils
      = oils.slice(1,5));
  }

}
