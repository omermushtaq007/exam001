import { CouponService } from './../../../service/coupon.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/model/app-user';

@Component({
  selector: 'app-bs-coupon',
  templateUrl: './bs-coupon.component.html',
  styleUrls: ['./bs-coupon.component.css'],
})
export class BsCouponComponent implements OnInit {
  Coupons: Coupon[];
  public couponForm: FormGroup;
  constructor(
    public FormBuilder: FormBuilder,
    public couponService: CouponService
  ) {
    this.couponForm = this.FormBuilder.group({
      couponCode: [''],
      date: [''],
      discount: [''],
      discountType: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.couponService.getCouponCode().subscribe((res) => {
      this.Coupons = res.map((coupon) => {
        return {
          id: coupon.payload.doc.id,
          couponData: coupon.payload.doc.data(),
        } as Coupon;
      });

      console.log(this.Coupons);
    });
  }

  save() {
    // console.log(this.couponForm.value);
    this.couponService.create(this.couponForm.value);
  }
  delete(id: string) {
    // console.log(id);
    this.couponService.deleteCouponCode(id);
  }
}
