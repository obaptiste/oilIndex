import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { Oil } from '../oil';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OilService } from '../oil.service';
import { HttpHeaderResponse } from '@angular/common/http';
@Component({
  selector: 'app-oil-detail',
  templateUrl: './oil-detail.component.html',
  styleUrls: ['./oil-detail.component.css']
})
export class OilDetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private oilService: OilService,
    private location: Location
  ) { }

  
  oil: Oil;
  
  ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.oilService.getOil(+params['id']))
      .subscribe(oil => this.oil = oil);
  }
  
  getOil(): void {
      const id = 
      +this.route.snapshot.paramMap.get('id');
        this.oilService.getOil(id)
        .subscribe(oil => this.oil = oil);
 }
 
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.oilService.update(this.oil)
      .then(() => this.goBack());
  }
  

  
}
