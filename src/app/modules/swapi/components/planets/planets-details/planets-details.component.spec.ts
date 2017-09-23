import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDetailsComponent } from './planets-details.component';

describe('PlanetsDetailsComponent', () => {
  let component: PlanetsDetailsComponent;
  let fixture: ComponentFixture<PlanetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
