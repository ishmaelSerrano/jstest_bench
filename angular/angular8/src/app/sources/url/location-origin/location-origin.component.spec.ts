import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOriginComponent } from './location-origin.component';

describe('LocationOriginComponent', () => {
  let component: LocationOriginComponent;
  let fixture: ComponentFixture<LocationOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
