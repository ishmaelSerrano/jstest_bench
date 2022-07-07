import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFrameElementComponent } from './window-frame-element.component';

describe('WindowFrameElementComponent', () => {
  let component: WindowFrameElementComponent;
  let fixture: ComponentFixture<WindowFrameElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowFrameElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowFrameElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
