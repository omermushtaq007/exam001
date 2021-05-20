import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { GuaranteeComponent } from './guarantee/guarantee.component';
import { BsUserComponent } from './bs-user/bs-user.component';
import { SingleVendorComponent } from './vendor/single-vendor/single-vendor.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AllExamsComponent } from './vendor/single-vendor/all-exams/all-exams.component';

@NgModule({
  declarations: [
    BsFooterComponent,
    BsNavbarComponent,
    AllExamsComponent,
    LoginComponent,
    VendorComponent,
    HomeComponent,
    PackagesComponent,
    GuaranteeComponent,
    BsUserComponent,
    SingleVendorComponent,
    ContactComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    BsFooterComponent,
    BsNavbarComponent,
    LoginComponent,
    VendorComponent,
    HomeComponent,
    PackagesComponent,
    GuaranteeComponent,
    BsUserComponent,
  ],
})
export class ComponentModule {}
