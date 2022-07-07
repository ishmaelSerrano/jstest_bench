import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RequestHeaderManipulationComponent } from './request-header-manipulation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from 'src/app/templates/rule/rule.component';

describe('RequestHeaderManipulationComponent', () => {
  let component: RequestHeaderManipulationComponent;
  let fixture: ComponentFixture<RequestHeaderManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ RequestHeaderManipulationComponent, RuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHeaderManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
