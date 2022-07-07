import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Html5StorageManipulationComponent } from './html5-storage-manipulation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RuleComponent } from 'src/app/templates/rule/rule.component';

describe('Html5StorageManipulationComponent', () => {
  let component: Html5StorageManipulationComponent;
  let fixture: ComponentFixture<Html5StorageManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      declarations: [ Html5StorageManipulationComponent, RuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5StorageManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
