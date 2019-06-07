import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { OilSearchService } from '../oil-search.service';
import { Oil } from '../oil';

@Component({
  selector: 'oil-search',
  templateUrl: './oil-search.component.html',
  styleUrls: [ './oil-search.component.css' ],
  providers: [OilSearchService]
})
export class OilSearchComponent implements OnInit {
  oils: Observable<Oil[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private oilSearchService: OilSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.oils = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.oilSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Oil[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Oil[]>([]);
      });
  }

  gotoDetail(oil: Oil): void {
    let link = ['/detail', oil.id];
    this.router.navigate(link);
  }
}
