import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsBarComponent } from './brands-bar.component';

describe('BrandsBarComponent', () => {
  let component: BrandsBarComponent;
  let fixture: ComponentFixture<BrandsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
