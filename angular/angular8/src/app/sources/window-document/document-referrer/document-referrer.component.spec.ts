import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentReferrerComponent } from './document-referrer.component';

describe('DocumentReferrerComponent', () => {
  let component: DocumentReferrerComponent;
  let fixture: ComponentFixture<DocumentReferrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentReferrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentReferrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
