import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageChildCompAccessGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const authStatus = this.authService.isAuth();

    if (authStatus) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
