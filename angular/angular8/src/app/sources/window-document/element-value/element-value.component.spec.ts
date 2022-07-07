import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementValueComponent } from './element-value.component';

describe('ElementValueComponent', () => {
  let component: ElementValueComponent;
  let fixture: ComponentFixture<ElementValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
