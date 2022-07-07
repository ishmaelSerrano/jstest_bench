import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketUrlPoisoningComponent } from './websocket-url-poisoning.component';

describe('WebsocketUrlPoisoningComponent', () => {
  let component: WebsocketUrlPoisoningComponent;
  let fixture: ComponentFixture<WebsocketUrlPoisoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketUrlPoisoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketUrlPoisoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
