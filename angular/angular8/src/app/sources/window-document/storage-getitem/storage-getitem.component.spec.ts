import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageGetitemComponent } from './storage-getitem.component';

describe('StorageGetitemComponent', () => {
  let component: StorageGetitemComponent;
  let fixture: ComponentFixture<StorageGetitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageGetitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageGetitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
