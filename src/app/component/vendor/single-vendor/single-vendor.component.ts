import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Vendor, VendorData } from 'src/app/model/app-user';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-single-vendor',
  templateUrl: './single-vendor.component.html',
  styleUrls: ['./single-vendor.component.css'],
})
export class SingleVendorComponent implements OnInit {
  name= 'Dumps Hub'
  // variable Call Interface
  Vendors: Vendor;
  constructor(
    public vendorService: VendorService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // console.log(`I have ${id}`);
      this.vendorService.get(id).forEach((vendor: any) => {
          this.Vendors = ({
            id,
            vendorData: vendor.slug as VendorData
          } as Vendor);
        });
    }
    
  }
}
