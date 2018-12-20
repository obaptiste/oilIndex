import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilDetailComponent } from './oil-detail.component';

describe('OilDetailComponent', () => {
  let component: OilDetailComponent;
  let fixture: ComponentFixture<OilDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
