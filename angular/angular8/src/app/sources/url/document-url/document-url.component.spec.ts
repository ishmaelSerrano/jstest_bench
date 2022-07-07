import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUrlComponent } from './document-url.component';

describe('DocumentUrlComponent', () => {
  let component: DocumentUrlComponent;
  let fixture: ComponentFixture<DocumentUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
