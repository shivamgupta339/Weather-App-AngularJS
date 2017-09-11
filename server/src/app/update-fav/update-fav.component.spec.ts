import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFavComponent } from './update-fav.component';

describe('UpdateFavComponent', () => {
  let component: UpdateFavComponent;
  let fixture: ComponentFixture<UpdateFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
