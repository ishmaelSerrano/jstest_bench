import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLearningCardComponent } from './current-learning-card.component';

describe('CurrentLearningCardComponent', () => {
  let component: CurrentLearningCardComponent;
  let fixture: ComponentFixture<CurrentLearningCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLearningCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLearningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
