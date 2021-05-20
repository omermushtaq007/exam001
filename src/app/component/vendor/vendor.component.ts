import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/app-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent implements OnInit {
  Vendors: Vendor[];
  constructor(public vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getVendorList().subscribe((res) => {
      this.Vendors = res.map((vendor) => {
        return {
          id: vendor.payload.doc.id,
          vendorData: vendor.payload.doc.data(),
        } as Vendor;
      });
    });
  }
}
