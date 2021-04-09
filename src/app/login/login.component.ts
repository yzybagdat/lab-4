import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [``]
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl:string | null="home";

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
      });
  }

  onFormSubmit(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
      console.log( 'return to '+ this.retUrl);
      if (this.retUrl!=null) {
        this.router.navigate( [this.retUrl]);
      } else {
        this.router.navigate( ['home']);
      }
    });
  }
}
