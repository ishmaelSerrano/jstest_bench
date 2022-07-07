import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBaseUriComponent } from './document-base-uri.component';

describe('DocumentBaseUriComponent', () => {
  let component: DocumentBaseUriComponent;
  let fixture: ComponentFixture<DocumentBaseUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentBaseUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentBaseUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
