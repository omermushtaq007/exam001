import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BsSideNavComponent } from './bs-side-nav/bs-side-nav.component';

import { ComponentModule } from './../component/component.module';

import { AdminAuthGuardService } from './../service/admin-auth-guard.service';
import { AuthGuardService } from './../service/auth-guard.service';
import { BsCertificationComponent } from './dash-component/bs-certification/bs-certification.component';
import { BsCouponComponent } from './dash-component/bs-coupon/bs-coupon.component';
import { BsCustomersComponent } from './dash-component/bs-customers/bs-customers.component';
import { BsDownloadStatusComponent } from './dash-component/bs-download-status/bs-download-status.component';
import { BsExamsComponent } from './dash-component/bs-exams/bs-exams.component';
import { BsVendorComponent } from './dash-component/bs-vendor/bs-vendor.component';
const dashboardRoute: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    children: [
      {
        path: 'certificates',
        component: BsCertificationComponent,
      },
      {
        path: 'exams',
        component: BsExamsComponent,
      },
      {
        path: 'coupons',
        component: BsCouponComponent,
      },
      {
        path: 'customers',
        component: BsCustomersComponent,
      },
      {
        path: 'download-status',
        component: BsDownloadStatusComponent,
      },
      {
        path: 'vendors',
        component: BsVendorComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    BsSideNavComponent,
    BsCertificationComponent,
    BsExamsComponent,
    BsCouponComponent,
    BsCustomersComponent,
    BsDownloadStatusComponent,
    BsVendorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    RouterModule.forRoot(dashboardRoute),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
