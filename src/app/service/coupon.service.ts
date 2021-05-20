import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Coupon } from '../model/app-user';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private angularFirestore: AngularFirestore) {}
  create(coupon: Coupon) {
    return new Promise<any>((resolve, reject) => {
      // console.log(coupon);

      this.angularFirestore
        .collection('coupons')
        .add(coupon)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  // Get Coupon Code
  getCouponCode() {
    return this.angularFirestore.collection('coupons').snapshotChanges();
  }

  // Delete Coupon Code
  deleteCouponCode(id:string){
    return this.angularFirestore
      .collection('coupons')
      .doc(id)
      .delete()
      .then(() => console.log('deleted'))
      .catch((e) => {
        console.log(e);
      });
  }
}
