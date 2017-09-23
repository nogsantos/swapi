import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHeadlineComponent } from './people-headline.component';

describe('PeopleHeadlineComponent', () => {
  let component: PeopleHeadlineComponent;
  let fixture: ComponentFixture<PeopleHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
