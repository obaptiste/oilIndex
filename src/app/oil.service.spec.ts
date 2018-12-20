import { TestBed, inject } from '@angular/core/testing';

import { OilService } from './oil.service';

describe('OilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OilService]
    });
  });

  it('should be created', inject([OilService], (service: OilService) => {
    expect(service).toBeTruthy();
  }));
});
