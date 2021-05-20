import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router, private userService:UserService) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userService.save(user);
        let returnUrl = localStorage.getItem('k') || '/';
        this.router.navigateByUrl(returnUrl);
      }
    });
  }
  ngOnInit(): void {}
}
