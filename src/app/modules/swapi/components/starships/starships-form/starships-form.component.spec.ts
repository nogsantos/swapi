import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsFormComponent } from './starships-form.component';

describe('StarshipsFormComponent', () => {
  let component: StarshipsFormComponent;
  let fixture: ComponentFixture<StarshipsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
