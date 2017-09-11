import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBeforeComponent } from './navbar-before.component';

describe('NavbarBeforeComponent', () => {
  let component: NavbarBeforeComponent;
  let fixture: ComponentFixture<NavbarBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
