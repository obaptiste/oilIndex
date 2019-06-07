import { TestBed } from '@angular/core/testing';

import { OilSearchService } from './oil-search.service';

describe('OilSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OilSearchService = TestBed.get(OilSearchService);
    expect(service).toBeTruthy();
  });
});
