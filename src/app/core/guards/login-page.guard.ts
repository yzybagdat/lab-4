import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const authStatus = this.authService.isAuth();

    if (!authStatus) {
      return true;
    }

    return this.router.parseUrl('/profile');
  }
}
