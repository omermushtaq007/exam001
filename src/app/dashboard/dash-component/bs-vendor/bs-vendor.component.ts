import { Vendor } from 'src/app/model/app-user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { VendorService } from './../../../service/vendor.service';

@Component({
  selector: 'app-bs-vendor',
  templateUrl: './bs-vendor.component.html',
  styleUrls: ['./bs-vendor.component.css'],
})
export class BsVendorComponent implements OnInit {
  //  Vendor$;
  Vendors: Vendor[];
  public vendorForm: FormGroup;

  constructor(
    public vendorService: VendorService,
    public FormBuilder: FormBuilder
  ) {
    this.vendorForm = this.FormBuilder.group({
      slug: [''],
    })
  }

  save() {
    this.vendorService.create(this.vendorForm.value);
    // console.log(this.vendorForm.value);
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
  }
  delete(id: string) {
    // console.log(id);
    this.vendorService.deleteVendor(id);
  }
}
