import {ComponentFixture, TestBed} from '@angular/core/testing';

import {XssComponent} from './xss.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('XssComponent', () => {

  let component: XssComponent;
  let fixture: ComponentFixture<XssComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [XssComponent],
      imports: [
        RouterTestingModule,
        NgbModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
