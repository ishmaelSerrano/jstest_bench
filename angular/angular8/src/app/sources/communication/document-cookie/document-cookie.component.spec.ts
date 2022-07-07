import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCookieComponent } from './document-cookie.component';

describe('DocumentCookieComponent', () => {
  let component: DocumentCookieComponent;
  let fixture: ComponentFixture<DocumentCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
