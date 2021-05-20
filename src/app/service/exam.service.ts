import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Exam } from '../model/app-user';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private angularFirestore: AngularFirestore) {}
  // Create Exam
  create(exam: Exam) {
    return new Promise<any>((resolve, reject) => {
      // console.log(exam);
      this.angularFirestore
        .collection('exams')
        .add(exam)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  // Get Exam List
  getExamList() {
    return this.angularFirestore
    .collection('exams')
    .snapshotChanges();
  }
  // delete certificate
  deleteExam(id: string) {
    return this.angularFirestore
      .collection('exams')
      .doc(id)
      .delete()
      .then(() => console.log('deleted'))
      .catch((e) => {
        console.log(e);
      });
  }
}
