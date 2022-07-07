import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDocumentUriComponent } from './location-document-uri.component';

describe('LocationDocumentUriComponent', () => {
  let component: LocationDocumentUriComponent;
  let fixture: ComponentFixture<LocationDocumentUriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDocumentUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDocumentUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
