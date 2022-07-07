import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LocalFilePathManipulationComponent } from './local-file-path-manipulation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from 'src/app/templates/rule/rule.component';

describe('LocalFilePathManipulationComponent', () => {
  let component: LocalFilePathManipulationComponent;
  let fixture: ComponentFixture<LocalFilePathManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ LocalFilePathManipulationComponent, RuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFilePathManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
