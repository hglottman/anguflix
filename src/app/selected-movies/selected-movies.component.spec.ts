import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMoviesComponent } from './selected-movies.component';

describe('SelectedMoviesComponent', () => {
  let component: SelectedMoviesComponent;
  let fixture: ComponentFixture<SelectedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
