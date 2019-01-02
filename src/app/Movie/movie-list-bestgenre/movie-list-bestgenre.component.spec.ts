import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBestgenreComponent } from './movie-list-bestgenre.component';

describe('MovieListBestgenreComponent', () => {
  let component: MovieListBestgenreComponent;
  let fixture: ComponentFixture<MovieListBestgenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListBestgenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBestgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
