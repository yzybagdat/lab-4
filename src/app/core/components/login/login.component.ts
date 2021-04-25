import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../services/navbar.service';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validUser: boolean;
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  response: any;

  constructor(
    public navbarService: NavbarService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navbarService.hide();
    this.response = null;
  }

  submit() {
    this.loginForm.disable();

    this.authService.login(this.loginForm.getRawValue()).subscribe(res => {
      this.response = res;

      if (this.response.length) {
        this.validUser = true;
        this.authService.setAuthUserLogin(this.response[0].login);
        this.authService.userAvatarUrl = res[0].photoUrl;
        this.router.navigate(['/profile']);
      } else {
        this.loginForm.enable();
        this.validUser = false;
      }
    });
  }
}
