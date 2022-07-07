import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningNextComponent } from './learning-next.component';

describe('LearningNextComponent', () => {
  let component: LearningNextComponent;
  let fixture: ComponentFixture<LearningNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
