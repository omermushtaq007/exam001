import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import 'rxjs-compat';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$.map((user) => {
      if (user) return true;
      this.router.navigate(['/login'], {
        // k is a parameter which holds user's current URL Value
        queryParams: { k: state.url },
      });
      return false;
    });
  }
}
