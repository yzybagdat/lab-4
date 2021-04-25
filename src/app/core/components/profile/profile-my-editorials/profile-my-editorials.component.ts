import { Component, OnInit } from '@angular/core';
import {EditorialListService} from '../../../services/editorial-list.service';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';
import {Editorial} from '../../../objects/editorial';

@Component({
  selector: 'app-profile-my-editorials',
  templateUrl: './profile-my-editorials.component.html',
  styleUrls: ['./profile-my-editorials.component.scss']
})
export class ProfileMyEditorialsComponent implements OnInit {
  editors: Editorial[] = [];
  subscribeEditors: Editorial[] = [];

  constructor(
    private editorialListService: EditorialListService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.gtet();
    this.getSubscribeEditors();
  }

  gtet() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
      let userId = res[0].id;
      console.log(userId);

      this.editorialListService.getEditorialsHasUser(userId).subscribe(res2 => {
        this.editors = res2;
      });
    });
  }

  getSubscribeEditors() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
      let userId = res[0].id;

      this.editorialListService.getSubscriberEditors(userId).subscribe(res2 => {
        this.subscribeEditors = res2;
      });
    });
  }

}
