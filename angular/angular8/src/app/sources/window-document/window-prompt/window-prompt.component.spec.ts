import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPromptComponent } from './window-prompt.component';

describe('WindowPromptComponent', () => {
  let component: WindowPromptComponent;
  let fixture: ComponentFixture<WindowPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
