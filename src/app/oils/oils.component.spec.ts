import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilsComponent } from './oils.component';

describe('OilsComponent', () => {
  let component: OilsComponent;
  let fixture: ComponentFixture<OilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
