import { CertificateService } from './../../../service/certificate.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ExamService } from './../../../service/exam.service';
import { Certificate, Exam, Vendor } from './../../../model/app-user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bs-exams',
  templateUrl: './bs-exams.component.html',
  styleUrls: ['./bs-exams.component.css'],
})
export class BsExamsComponent implements OnInit {
  Exams: Exam[];
  Vendors: Vendor[];
  Certificates: Certificate[];

  public examForm: FormGroup;

  constructor(
    public FormBuilder: FormBuilder,
    public examService: ExamService,
    public vendorService: VendorService,
    public certificateService: CertificateService
  ) {
    this.examForm = this.FormBuilder.group({
      // Exam Input fields
      slug: [''],
      examCode: [''],
      examName: [''],
      certificateName: [''],
      questions: [''],
      date: [''],
      price: [''],
      status: [''],
      retired: [''],
    });
    // console.log(this.examForm);
  }

  ngOnInit(): void {
    this.vendorService.getVendorList().subscribe((res) => {
      this.Vendors = res.map((vendor) => {
        return {
          id: vendor.payload.doc.id,
          vendorData: vendor.payload.doc.data(),
        } as Vendor;
      });
      // console.log(this.Vendors);
    });
    this.certificateService.getCertificateList().subscribe((res) => {
      this.Certificates = res.map((certificate) => {
        return {
          id: certificate.payload.doc.id,
          certificateData: certificate.payload.doc.data(),
        } as Certificate;
      });
      // console.log(this.Certificates);
    });
    this.examService.getExamList().subscribe((res) => {
      this.Exams = res.map((exam) => {
        return {
          id: exam.payload.doc.id,
          examData: exam.payload.doc.data(),
        } as Exam;
      });
      console.log(this.Exams);
    });
  }

  // Save Exams
  save() {
    // console.log(this.examForm.value);
    this.examService.create(this.examForm.value);
  }

  // Delete Exams
  delete(id: string) {
    // console.log(id);
    this.examService.deleteExam(id);
  }
}
