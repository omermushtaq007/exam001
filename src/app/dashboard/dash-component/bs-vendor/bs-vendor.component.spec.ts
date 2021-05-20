import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsVendorComponent } from './bs-vendor.component';

describe('BsVendorComponent', () => {
  let component: BsVendorComponent;
  let fixture: ComponentFixture<BsVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
