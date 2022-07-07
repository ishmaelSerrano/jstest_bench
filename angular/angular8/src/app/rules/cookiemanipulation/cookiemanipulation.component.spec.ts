import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CookiemanipulationComponent } from './cookiemanipulation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('CookiemanipulationComponent', () => {
  let component: CookiemanipulationComponent;
  let fixture: ComponentFixture<CookiemanipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ CookiemanipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiemanipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
