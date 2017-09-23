import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsHeadlineComponent } from './planets-headline.component';

describe('PlanetsHeadlineComponent', () => {
  let component: PlanetsHeadlineComponent;
  let fixture: ComponentFixture<PlanetsHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
