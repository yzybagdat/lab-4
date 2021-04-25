import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Movie} from '../../core/objects/movie';
import {MovieService} from '../../core/services/movie.service';
import {UserService} from '../../core/services/user.service';
import {AuthService} from '../../core/services/auth.service';
import {User} from '../../core/objects/user';
import {MatDialog} from '@angular/material/dialog';
import {PayDialogComponent} from '../dialogs/pay-dialog/pay-dialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges, OnInit, OnDestroy {
  @Input() genre: string;
  @Input()
  get checkGenre(): string { return this._checkGenre; }
  set checkGenre(checkGenre: string) {
    this._checkGenre = (checkGenre) || null;
    if (this.checkGenre !== 'qwe' && this.checkGenre !== this.genre) {
      this.closeDetail();
    }
  }
  private _checkGenre;
  @Input() movies: Movie[];
  @Output() getGenre = new EventEmitter<string>();
  @Input() url;

  lastShowMovie: Movie;
  showMovieDetail;
  aboutClick = true;
  detailsClick = false;
  clickAdd = false;

  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit(): void {
    this.lastShowMovie = null;
    this.showMovieDetail = false;
  }

  ngOnDestroy() {
  }

  onClickMovieCarouselCard(movie: Movie) {
    if (movie !== this.lastShowMovie) {
      this.detailsClick = false;
      this.aboutClick = true;
      this.lastShowMovie = movie;
      this.showMovieDetail = true;
      this.getGenre.emit(this.genre);
    }
  }

  setRating(rating: number): string {
    if (rating < 3) {
      return '#f6f6f6';
    } else if (rating < 5) {
      return '#686868';
    } else if (rating < 7) {
      return '#f6db3b';
    } else {
      return '#72f643';
    }
  }

  aboutBtnClick() {
    if (!this.aboutClick) {
      this.detailsClick = false;
      this.aboutClick = true;
    }
  }

  detailsBtnClick() {
    if (!this.detailsClick) {
      this.aboutClick = false;
      this.detailsClick = true;
    }
  }

  closeDetail() {
    this.showMovieDetail = false;
    this.lastShowMovie = null;
  }

  addToFa(id: number) {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(userRes => {
      let user: User = userRes[0];
      let has = false;
      this.clickAdd = !this.clickAdd;

      for (let i = 0; i < user.favoriteMovie.length; i++) {
        if (id === user.favoriteMovie[i]) {
          has = true;
          break;
        }
      }

      if (has === false && this.clickAdd === true) {
        console.log("Add");
        user.favoriteMovie.push(id);
        this.userService.updateUser(user).subscribe();
      }

      if (has === true && this.clickAdd === false) {
        console.log("NO");

        let newArr = [];
        for (let i = 0; i < user.favoriteMovie.length; i++) {
          if (id !== user.favoriteMovie[i]) {
            newArr.push(user.favoriteMovie[i]);
          }
        }
        user.favoriteMovie = newArr;
        this.userService.updateUser(user).subscribe();
      }
    });
  }

  doPay(movie: Movie) {
    this.openDialog(movie);
  }

  openDialog(payMovie: Movie) {
    const dialogRef = this.dialog.open(PayDialogComponent, {
      data: { movie: payMovie, login: this.authService.authUserLogin }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
          let user: User = res[0];

          user.myMovies.push(payMovie.id);

          this.userService.updateUser(user).subscribe();
        });
      }
    });
  }
}
