import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpathInjectionComponent } from './xpath-injection.component';

describe('XpathInjectionComponent', () => {
  let component: XpathInjectionComponent;
  let fixture: ComponentFixture<XpathInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpathInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpathInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
