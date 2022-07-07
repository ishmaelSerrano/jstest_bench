import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHashComponent } from './location-hash.component';

describe('LocationHashComponent', () => {
  let component: LocationHashComponent;
  let fixture: ComponentFixture<LocationHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
