import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieManipulationComponent } from './cookie-manipulation.component';

describe('CookieManipulationComponent', () => {
  let component: CookieManipulationComponent;
  let fixture: ComponentFixture<CookieManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
