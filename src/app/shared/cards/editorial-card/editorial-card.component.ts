import {Component, Input, OnInit} from '@angular/core';
import {Editorial} from '../../../core/objects/editorial';
import {User} from '../../../core/objects/user';
import {UserService} from '../../../core/services/user.service';
import {EditorialListService} from '../../../core/services/editorial-list.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-editorial-card',
  templateUrl: './editorial-card.component.html',
  styleUrls: ['./editorial-card.component.scss']
})
export class EditorialCardComponent implements OnInit {
  @Input() card: Editorial;
  user: User;

  constructor(
    private userService: UserService,
    private editorialListService: EditorialListService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.card.id).subscribe(res => {
      this.user = res;
    });
  }

  addSybs() {
    let has = false;

    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
      let user: User = res[0];

      for (let id of this.card.subscriber) {
        if (id === user.id) {
          has = true;
          break;
        }
      }

      if (!has && this.card.userId !== user.id) {
        this.card.subscriber.push(user.id);
        this.editorialListService.updateEditor(this.card).subscribe(() => {
          this.router.navigate(['editorial/' + this.card.id]);
        });
      } else {
        this.router.navigate(['editorial/' + this.card.id]);
      }
    });
  }
}
