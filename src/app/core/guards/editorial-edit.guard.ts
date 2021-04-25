import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {EditorialListService} from '../services/editorial-list.service';
import {UserService} from '../services/user.service';
import {User} from '../objects/user';
import {Editorial} from '../objects/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialEditGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private editorialListService: EditorialListService,
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree
  {
    let editorialId = +next.queryParamMap.get('id');
    let has = false;

    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
      let user: User = resUser[0];

      this.editorialListService.getEditorialsHasUser(user.id).subscribe(res2 => {
        let editrs: Editorial[] = res2;

        for (let edit of editrs) {
          if (edit.userId === user.id && edit.id === editorialId) {
            has = true;
            break;
          }
        }
      });
    });

    if(has === false) {
      this.router.navigate(['**']);
    }

    return has;
  }

}
