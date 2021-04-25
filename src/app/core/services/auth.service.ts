import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  auth: boolean;
  private _authUserLogin: string;
  apiUser = 'http://localhost:3000/users';
  userAvatarUrl: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private _http: HttpClient
  ) {
    this.auth = false;
    if (localStorage.getItem('userLogin')) {
      this._authUserLogin = localStorage.getItem('userLogin');
    }
    this.setAvatarUrl();
  }

  get authUserLogin(): string {
    return this._authUserLogin;
  }

  isAuth() {
    const userLogin: string = localStorage.getItem('userLogin');

    if (userLogin) {
      this.auth = true;
    }

    return this.auth;
  }

  login(data): Observable<any> {
    return this._http.get<Response>(this.apiUser + `?login=${data.login}&password=${data.password}`);
  }

  logOut() {
    localStorage.removeItem('userLogin');
    this.auth = false;
    this._authUserLogin = '';
    this.userAvatarUrl = '';
    this.router.navigate(['/login']);
  }

  setAuthUserLogin(login) {
    localStorage.setItem('userLogin', login);
    this._authUserLogin = login;
  }

  setAvatarUrl() {
    this.userService.getUserByLogin(localStorage.getItem('userLogin')).subscribe(res => {
      this.userAvatarUrl = res[0].photoUrl;
    });
  }

}
