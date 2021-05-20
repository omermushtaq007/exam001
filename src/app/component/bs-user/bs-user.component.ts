import { AppUser } from './../../model/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'bs-user',
  templateUrl: './bs-user.component.html',
  styleUrls: ['./bs-user.component.css'],
})
export class BsUserComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  ngOnInit(): void {}
  logout() {
    this.auth.logout();
  }
}
