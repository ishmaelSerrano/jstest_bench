import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRedirectionComponent } from './open-redirection.component';

describe('OpenRedirectionComponent', () => {
  let component: OpenRedirectionComponent;
  let fixture: ComponentFixture<OpenRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
