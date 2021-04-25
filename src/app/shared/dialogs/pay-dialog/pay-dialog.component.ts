import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Movie} from '../../../core/objects/movie';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../core/objects/user';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})
export class PayDialogComponent implements OnInit {
  movie: Movie;
  isHas = false;

  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: {movie: Movie, login: string}
    ) { }

  ngOnInit(): void {
    this.checkHas();
  }

  checkHas() {
    this.userService.getUserByLogin(this.data.login).subscribe(res => {
      let user: User = res[0];

      for (let i = 0; i < user.myMovies.length; i++) {
        if (user.myMovies[i] === this.data.movie.id) {
          this.isHas = true;
        }
      }
    });
  }
}
