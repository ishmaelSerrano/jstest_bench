import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptInjectionComponent } from './javascript-injection.component';

describe('JavascriptInjectionComponent', () => {
  let component: JavascriptInjectionComponent;
  let fixture: ComponentFixture<JavascriptInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
