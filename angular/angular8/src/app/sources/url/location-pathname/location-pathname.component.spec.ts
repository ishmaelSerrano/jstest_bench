import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPathnameComponent } from './location-pathname.component';

describe('LocationPathnameComponent', () => {
  let component: LocationPathnameComponent;
  let fixture: ComponentFixture<LocationPathnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPathnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPathnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
