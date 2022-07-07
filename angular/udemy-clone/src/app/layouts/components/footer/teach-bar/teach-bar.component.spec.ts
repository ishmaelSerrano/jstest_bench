import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachBarComponent } from './teach-bar.component';

describe('TeachBarComponent', () => {
  let component: TeachBarComponent;
  let fixture: ComponentFixture<TeachBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
