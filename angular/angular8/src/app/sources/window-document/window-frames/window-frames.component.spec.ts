import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFramesComponent } from './window-frames.component';

describe('WindowFramesComponent', () => {
  let component: WindowFramesComponent;
  let fixture: ComponentFixture<WindowFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
