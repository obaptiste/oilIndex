import { Component } from '@angular/core';
import { OilService } from './oil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OilService]
})
export class AppComponent   {
  oils: {}
  title = 'Essential Oil Index';

  constructor(private oilService: OilService) {}
}
