import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { OilService } from '../oil.service';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [OilService] 
})
export class DashboardComponent implements OnInit {

  oils: Oil[];

  constructor(private oilService: OilService) { }

  ngOnInit(): void {
    this.oilService.getOils().map(() => this.oils as Oil[]);
  }

}