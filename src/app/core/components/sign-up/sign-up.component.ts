import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  usedLogin: string;
  signUpForm: FormGroup;
  blockForm: boolean;

  constructor(
    private navBarService: NavbarService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createSignUpForm();
    this.navBarService.hide();
    this.usedLogin = 'empty';
    this.blockForm = false;
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      photoUrl: new FormControl('../../../assets/images/avatars/avatar1.png'),
      myMovies: new FormArray([]),
      favoriteMovie: new FormArray([]),
      myEditorials: new FormArray([]),
    });
  }

  submit() {
    this.userService.hasLogin(this.signUpForm.value.login).subscribe(res => {
      this.blockForm = true;

      if (this.signUpForm.valid && res.length === 0 && this.isPasswordsEqual()) {
        this.usedLogin = 'false';
        this.signUpForm.removeControl('password2');
        this.userService.createUser(this.signUpForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/login']);
        });
      } else {
        this.blockForm = false;
        if (res.length !== 0) {
          this.usedLogin = 'true';
        } else if (this.signUpForm.value.login === '') {
          this.usedLogin = 'empty';
        } else if (!this.isPasswordsEqual()) {
          this.signUpForm.patchValue({password: '', password2: ''});
        }
      }
    });
  }

  isPasswordsEqual(): boolean {
    if (this._password.value && this._password2.value) {
      return (this._password.value === this._password2.value);
    } else if (!this._password.value && !this._password2.value) {
      return true;
    } else {
      return false;
    }
  }

  get _firstName() {
    return this.signUpForm.get('firstName');
  }

  get _lastName() {
    return this.signUpForm.get('lastName');
  }

  get _login() {
    return this.signUpForm.get('login');
  }

  get _password() {
    return this.signUpForm.get('password');
  }

  get _password2() {
    return this.signUpForm.get('password2');
  }
}
