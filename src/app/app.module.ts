import { ComponentModule } from './component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { environment } from '../environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './default/default.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Services
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DefaultModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuardService,
    UserService,
    VendorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
