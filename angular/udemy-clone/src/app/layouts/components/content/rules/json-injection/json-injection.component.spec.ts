import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonInjectionComponent } from './json-injection.component';

describe('JsonInjectionComponent', () => {
  let component: JsonInjectionComponent;
  let fixture: ComponentFixture<JsonInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
