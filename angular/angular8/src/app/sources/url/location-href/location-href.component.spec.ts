import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHrefComponent } from './location-href.component';

describe('LocationHrefComponent', () => {
  let component: LocationHrefComponent;
  let fixture: ComponentFixture<LocationHrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
