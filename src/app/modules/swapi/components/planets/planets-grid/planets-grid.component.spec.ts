import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsGridComponent } from './planets-grid.component';

describe('PlanetsGridComponent', () => {
  let component: PlanetsGridComponent;
  let fixture: ComponentFixture<PlanetsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
