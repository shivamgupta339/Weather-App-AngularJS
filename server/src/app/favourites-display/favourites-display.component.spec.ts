import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesDisplayComponent } from './favourites-display.component';

describe('FavouritesDisplayComponent', () => {
  let component: FavouritesDisplayComponent;
  let fixture: ComponentFixture<FavouritesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
