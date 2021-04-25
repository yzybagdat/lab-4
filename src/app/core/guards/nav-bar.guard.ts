import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {NavbarService} from "../services/navbar.service";

@Injectable()
export class NavBarGuard implements CanDeactivate<LoginComponent> {
  constructor(public nav: NavbarService) {
  }

  canDeactivate(component: LoginComponent): boolean {
    this.nav.show();
    return true;
  }
}
