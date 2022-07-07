import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNameComponent } from './window-name.component';

describe('WindowNameComponent', () => {
  let component: WindowNameComponent;
  let fixture: ComponentFixture<WindowNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
