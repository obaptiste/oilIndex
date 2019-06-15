import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OilService } from '../oil.service';
@Component({
  selector: 'app-oil-detail',
  templateUrl: './oil-detail.component.html',
  styleUrls: ['./oil-detail.component.css'],
  providers: [OilService]
})
export class OilDetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private oilService: OilService,
    private location: Location
  ) { }

  
  oil: Oil;
  
  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.oilService.getOil(id)
        .subscribe(oil => this.oil = oil);
      }
    });
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
      .subscribe(() => this.goBack());
  }
  

  
}
