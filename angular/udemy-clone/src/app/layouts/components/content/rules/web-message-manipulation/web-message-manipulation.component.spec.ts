import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMessageManipulationComponent } from './web-message-manipulation.component';

describe('WebMessageManipulationComponent', () => {
  let component: WebMessageManipulationComponent;
  let fixture: ComponentFixture<WebMessageManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMessageManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMessageManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
