import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {NavbarService} from "../../core/services/navbar.service";
import {UserService} from '../../core/services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input = '';

  clickSearch: boolean;

  constructor(
    private authService: AuthService,
    public navbarService: NavbarService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.clickSearch = false;
  }

  isAuth(): boolean {
    return this.authService.isAuth();
  }

  getAvatar(): string {
    return this.authService.userAvatarUrl;
  }

  doSearch(event) {
    let code = (event.keyCode) ? event.keyCode : event.which;

    if (code === 13 ) {
      this.router.navigate(['catalog', this.input]);
    }
  }
}
