import { ActivatedRoute } from '@angular/router';

import { CertificateService } from './../../../service/certificate.service';
import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Certificate, Vendor } from 'src/app/model/app-user';

@Component({
  selector: 'app-bs-certification',
  templateUrl: './bs-certification.component.html',
  styleUrls: ['./bs-certification.component.css'],
})
export class BsCertificationComponent implements OnInit {
  Vendors: Vendor[];
  Certificates: Certificate[];
  showMsg: boolean;
  cert: any;
  isEdit: Boolean;
  id: string = '';

  public certificateForm: FormGroup;

  constructor(
    public FormBuilder: FormBuilder,
    public vendorService: VendorService,
    public activiateRoute: ActivatedRoute,
    public certificateService: CertificateService
  ) {
    this.certificateForm = this.FormBuilder.group({
      // input fields
      slug: [''],
      status: [''],
      certificate: [''],
    });
  }

  ngOnInit() {
    this.vendorService.getVendorList().subscribe((res) => {
      this.Vendors = res.map((vendor) => {
        return {
          id: vendor.payload.doc.id,
          vendorData: vendor.payload.doc.data(),
        } as Vendor;
      });
    });
    this.certificateService.getCertificateList().subscribe((res) => {
      this.Certificates = res.map((certificate) => {
        return {
          id: certificate.payload.doc.id,
          certificateData: certificate.payload.doc.data(),
        } as Certificate;
      });
    });
  }

  save() {
    if (!this.isEdit) {
      this.certificateService.create(this.certificateForm.value);
      this.certificateForm.reset();
      this.isEdit = false;
    } else {
      this.certificateService.updateCertificate(
        this.certificateForm.value,
        this.id
      );
      this.certificateForm.reset();
    }
  }

  delete(id: string) {
    this.certificateService.deleteCertificate(id);
  }
  edit(id: string) {
    this.certificateService.get(id).forEach((res: any) => {
      this.cert = res;
      this.isEdit = true;
      this.id = id;

      this.certificateForm = this.FormBuilder.group({
        slug: [this.cert.slug],
        status: [this.cert.status],
        certificate: [this.cert.certificate],
      });
    });
  }
}
