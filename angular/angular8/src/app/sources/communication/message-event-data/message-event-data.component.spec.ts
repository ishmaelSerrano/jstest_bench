import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEventDataComponent } from './message-event-data.component';

describe('MessageEventDataComponent', () => {
  let component: MessageEventDataComponent;
  let fixture: ComponentFixture<MessageEventDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEventDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
