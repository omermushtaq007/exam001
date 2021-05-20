import { Certificate, CertificateData } from './../model/app-user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  constructor(private angularFirestore: AngularFirestore) {}
  // Create Method
  create(cert: Certificate) {
    return new Promise<any>((resolve, reject) => {
      // console.log(cert);
      this.angularFirestore
        .collection('certificates')
        .add(cert)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  // Get Method
  getCertificateList() {
    return this.angularFirestore.collection('certificates').snapshotChanges();
  }

  // delete certificate
  deleteCertificate(id: string) {
    return this.angularFirestore
      .collection('certificates')
      .doc(id)
      .delete()
      .then(() => console.log('deleted'))
      .catch((e) => {
        console.log(e);
      });
  }

  // Get Certificate
  get(id: string) {
    // console.log('jjjjdjs  '+ id)
    // console.log(
    //   this.angularFirestore.collection('certificates').doc(id).valueChanges()
    // );
    return this.angularFirestore
      .collection('certificates')
      .doc(id)
      .valueChanges();
  }
  updateCertificate(cert: CertificateData, id: string) {
    // console.log(id);
    return this.angularFirestore
        .collection('certificates')
        .doc(id)
        .update({
          slug: cert.slug,
          status: cert.status,
          certificate: cert.certificate,
        });
  }
}
