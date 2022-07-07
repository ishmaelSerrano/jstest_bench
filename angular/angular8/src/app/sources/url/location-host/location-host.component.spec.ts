import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHostComponent } from './location-host.component';

describe('LocationHostComponent', () => {
  let component: LocationHostComponent;
  let fixture: ComponentFixture<LocationHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
