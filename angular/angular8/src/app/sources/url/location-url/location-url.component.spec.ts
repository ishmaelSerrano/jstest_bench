import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUrlComponent } from './location-url.component';

describe('LocationUrlComponent', () => {
  let component: LocationUrlComponent;
  let fixture: ComponentFixture<LocationUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
