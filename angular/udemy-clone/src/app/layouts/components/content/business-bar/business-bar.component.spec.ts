import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBarComponent } from './business-bar.component';

describe('BusinessBarComponent', () => {
  let component: BusinessBarComponent;
  let fixture: ComponentFixture<BusinessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
