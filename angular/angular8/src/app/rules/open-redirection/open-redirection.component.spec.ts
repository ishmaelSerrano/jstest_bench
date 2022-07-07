import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OpenRedirectionComponent } from './open-redirection.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from 'src/app/templates/rule/rule.component';

describe('OpenRedirectionComponent', () => {
  let component: OpenRedirectionComponent;
  let fixture: ComponentFixture<OpenRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ OpenRedirectionComponent, RuleComponent ]
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
