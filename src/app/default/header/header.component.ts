import { AuthService } from './../../service/auth.service';

import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/model/app-user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  ngOnInit(): void {}
  logout() {
    this.auth.logout();
  }
}
