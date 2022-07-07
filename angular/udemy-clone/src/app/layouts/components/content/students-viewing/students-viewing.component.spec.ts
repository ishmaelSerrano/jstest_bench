import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsViewingComponent } from './students-viewing.component';

describe('StudentsViewingComponent', () => {
  let component: StudentsViewingComponent;
  let fixture: ComponentFixture<StudentsViewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsViewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
