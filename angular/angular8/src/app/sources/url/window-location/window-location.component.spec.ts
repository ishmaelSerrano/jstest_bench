import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowLocationComponent } from './window-location.component';

describe('WindowLocationComponent', () => {
  let component: WindowLocationComponent;
  let fixture: ComponentFixture<WindowLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
