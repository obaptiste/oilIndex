import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilSearchComponent } from './oil-search.component';

describe('OilSearchComponent', () => {
  let component: OilSearchComponent;
  let fixture: ComponentFixture<OilSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
