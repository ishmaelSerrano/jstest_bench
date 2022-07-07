import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDomainManipulationComponent } from './document-domain-manipulation.component';

describe('DocumentDomainManipulationComponent', () => {
  let component: DocumentDomainManipulationComponent;
  let fixture: ComponentFixture<DocumentDomainManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDomainManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDomainManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
