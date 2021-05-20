import { AllCertificatesComponent } from './../component/vendor/single-vendor/all-certificates/all-certificates.component';
import { AllExamsComponent } from './../component/vendor/single-vendor/all-exams/all-exams.component';
import { RegisterComponent } from './../component/register/register.component';
import { ContactComponent } from './../component/contact/contact.component';
import { SingleVendorComponent } from './../component/vendor/single-vendor/single-vendor.component';
import { GuaranteeComponent } from './../component/guarantee/guarantee.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from '../component/login/login.component';
import { VendorComponent } from '../component/vendor/vendor.component';
import { PackagesComponent } from '../component/packages/packages.component';
import { HomeComponent } from '../component/home/home.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

const defaultRoutes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'packages',
        component: PackagesComponent,
      },
      {
        path: 'vendor/:id',
        component: SingleVendorComponent,
        children: [
          {
            path: 'all-exam',
            component: AllExamsComponent,
          },
          {
            path: 'all-cert',
            component: AllCertificatesComponent,
          },
        ],
      },
      {
        path: 'vendor',
        component: VendorComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'guarantee',
        component: GuaranteeComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DefaultComponent, HeaderComponent],
  imports: [CommonModule, ComponentModule, RouterModule.forRoot(defaultRoutes)],
  exports: [DefaultComponent],
  providers: [AuthService, UserService],
})
export class DefaultModule {}
