import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSuggestionsComponent } from './enrolled-suggestions.component';

describe('EnrolledSuggestionsComponent', () => {
  let component: EnrolledSuggestionsComponent;
  let fixture: ComponentFixture<EnrolledSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
