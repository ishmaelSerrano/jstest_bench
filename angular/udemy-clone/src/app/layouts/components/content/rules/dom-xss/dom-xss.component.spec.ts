import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomXssComponent } from './dom-xss.component';

describe('DomXssComponent', () => {
  let component: DomXssComponent;
  let fixture: ComponentFixture<DomXssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomXssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomXssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
