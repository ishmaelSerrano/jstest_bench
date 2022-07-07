import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkManipulationComponent } from './link-manipulation.component';

describe('LinkManipulationComponent', () => {
  let component: LinkManipulationComponent;
  let fixture: ComponentFixture<LinkManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
