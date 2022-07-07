import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DomainmanipulationComponent } from './domainmanipulation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from 'src/app/templates/rule/rule.component';

describe('DomainmanipulationComponent', () => {
  let component: DomainmanipulationComponent;
  let fixture: ComponentFixture<DomainmanipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ DomainmanipulationComponent, RuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainmanipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
