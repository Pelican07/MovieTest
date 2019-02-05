import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsAccueilComponent } from './boutons-accueil.component';

describe('BoutonsAccueilComponent', () => {
  let component: BoutonsAccueilComponent;
  let fixture: ComponentFixture<BoutonsAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonsAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
