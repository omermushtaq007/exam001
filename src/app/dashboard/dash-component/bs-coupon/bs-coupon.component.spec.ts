import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCouponComponent } from './bs-coupon.component';

describe('BsCouponComponent', () => {
  let component: BsCouponComponent;
  let fixture: ComponentFixture<BsCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
