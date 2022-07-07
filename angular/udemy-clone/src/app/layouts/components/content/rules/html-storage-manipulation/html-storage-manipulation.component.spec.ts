import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlStorageManipulationComponent } from './html-storage-manipulation.component';

describe('HtmlStorageManipulationComponent', () => {
  let component: HtmlStorageManipulationComponent;
  let fixture: ComponentFixture<HtmlStorageManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlStorageManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlStorageManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
