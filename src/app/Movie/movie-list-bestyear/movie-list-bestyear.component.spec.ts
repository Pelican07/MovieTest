import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBestyearComponent } from './movie-list-bestyear.component';

describe('MovieListBestyearComponent', () => {
  let component: MovieListBestyearComponent;
  let fixture: ComponentFixture<MovieListBestyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListBestyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBestyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
