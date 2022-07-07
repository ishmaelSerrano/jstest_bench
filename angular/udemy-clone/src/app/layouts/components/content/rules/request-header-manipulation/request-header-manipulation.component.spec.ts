import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHeaderManipulationComponent } from './request-header-manipulation.component';

describe('RequestHeaderManipulationComponent', () => {
  let component: RequestHeaderManipulationComponent;
  let fixture: ComponentFixture<RequestHeaderManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestHeaderManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHeaderManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
