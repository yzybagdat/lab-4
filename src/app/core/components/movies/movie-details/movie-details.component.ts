import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../objects/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../services/movie.service';
import {User} from '../../../objects/user';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';
import {ContinueMovies} from '../../../objects/continue-movies';
import {ContinueMovieService} from '../../../services/continue-movie.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movieId: number;
  aboutClick = true;
  detailsClick = false;
  inputData1: Movie[] = [];
  inputData2: Movie[] = [];
  status;
  clickAdd = false;

  continueHas = false;
  continueMovie: ContinueMovies;
  start = 0;
  end = 0;
  run = false;
  time = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService,
    private continueMovieService: ContinueMovieService
  ) { }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.getMovie();
    this.getInputData1();
    this.getInputData2();
    this.getContinueMovie();
    this.status = 'qwe';
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  getContinueMovie() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
      let user: User = res[0];

      this.continueMovieService.getContinueMoviesUserAndMovie(user.id, this.movie.id).subscribe(res2 => {
        this.continueMovie = res2[0];

        if (undefined !== this.continueMovie) {
          this.start = this.continueMovie.watchTime;
        }
      });
    });
  }

  getMovie() {
    this.movieService.getMovieById(this.movieId).subscribe(res => {
      this.movie = res;
    });
  }

  getInputData1() {
    this.movieService.get10MoviesByGenre('comedy').subscribe(res => {
      this.inputData1 = res;
    });
  }

  getInputData2() {
    this.movieService.get10MoviesByGenre('anime').subscribe(res => {
      this.inputData2 = res;
    });
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

  addToFa() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(userRes => {
      let user: User = userRes[0];
      let has = false;
      this.clickAdd = !this.clickAdd;

      for (let i = 0; i < user.favoriteMovie.length; i++) {
        if (this.movie.id === user.favoriteMovie[i]) {
          has = true;
          break;
        }
      }

      if (has === false && this.clickAdd === true) {
        console.log("Add");
        user.favoriteMovie.push(this.movie.id);
        this.userService.updateUser(user).subscribe();
      }

      if (has === true && this.clickAdd === false) {
        console.log("NO");

        let newArr = [];
        for (let i = 0; i < user.favoriteMovie.length; i++) {
          if (this.movie.id !== user.favoriteMovie[i]) {
            newArr.push(user.favoriteMovie[i]);
          }
        }
        user.favoriteMovie = newArr;
        this.userService.updateUser(user).subscribe();
      }
    });
  }

  startTimeRun() {
      // const interval = setInterval(() => {
      //   console.log(++this.time);
      // }, 1000);
      // this.run = false;
      // clearInterval(interval);
  }
}
