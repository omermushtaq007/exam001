import { UserService } from './user.service';
import { AppUser } from './../model/app-user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { Observable } from 'rxjs-compat';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs-compat';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | any>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    let k = this.route.snapshot.queryParamMap.get('k') || '/';
    localStorage.setItem('k', k);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap((user) => {
      if (user) return this.userService.get(user.uid);
      return Observable.of(null);
    });
  }
}
