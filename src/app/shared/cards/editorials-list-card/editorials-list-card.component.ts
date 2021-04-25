import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../core/objects/user';
import {Editorial} from '../../../core/objects/editorial';

@Component({
  selector: 'app-editorials-list-card',
  templateUrl: './editorials-list-card.component.html',
  styleUrls: ['./editorials-list-card.component.scss']
})
export class EditorialsListCardComponent implements OnInit {
  @Input() editor: Editorial;
  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.editor.userId).subscribe(res => {
      this.user = res;
    });
  }

}
