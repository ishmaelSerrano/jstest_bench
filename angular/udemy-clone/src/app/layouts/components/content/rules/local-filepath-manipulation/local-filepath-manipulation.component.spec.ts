import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFilepathManipulationComponent } from './local-filepath-manipulation.component';

describe('LocalFilepathManipulationComponent', () => {
  let component: LocalFilepathManipulationComponent;
  let fixture: ComponentFixture<LocalFilepathManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFilepathManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFilepathManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
