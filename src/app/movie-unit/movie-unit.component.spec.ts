import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUnitComponent } from './movie-unit.component';

describe('MovieUnitComponent', () => {
  let component: MovieUnitComponent;
  let fixture: ComponentFixture<MovieUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
