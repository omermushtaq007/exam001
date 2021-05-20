import { Vendor } from '../model/app-user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private angularFirestore: AngularFirestore) {}
  // Create a Vendor
  create(slug: Vendor) {
    return new Promise<any>((resolve, reject) => {
      // console.log(slug);

      this.angularFirestore
        .collection('vendors')
        .add(slug)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  // Get Vendor
  getVendorList() {
    return this.angularFirestore.collection('vendors').snapshotChanges();
  }

  // Remove Vendor
  deleteVendor(id: string) {
    // console.log(this.angularFirestore.collection('vendor'));
    // console.log(id);
    return this.angularFirestore
      .collection('vendors')
      .doc(id)
      .delete()
      .then(() => console.log('deleted'))
      .catch((e) => {
        console.log(e);
      });
  }

  // Get single Vendor
  get(id: string) {
    return this.angularFirestore.collection('vendors').doc(id).valueChanges();
    // return this.angularFirestore.collection('vendors/' + id).snapshotChanges().forEach((v) => console.log(typeof v));

  }
}
