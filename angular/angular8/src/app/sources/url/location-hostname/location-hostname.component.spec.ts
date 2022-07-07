import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHostnameComponent } from './location-hostname.component';

describe('LocationHostnameComponent', () => {
  let component: LocationHostnameComponent;
  let fixture: ComponentFixture<LocationHostnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHostnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHostnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
