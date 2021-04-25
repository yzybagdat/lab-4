import { Component, OnInit } from '@angular/core';
import {ContinueMovieService} from '../../../services/continue-movie.service';
import {Movie} from '../../../objects/movie';
import {MovieService} from '../../../services/movie.service';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';
import {ContinueMovies} from '../../../objects/continue-movies';
import {User} from '../../../objects/user';

@Component({
  selector: 'app-profile-continue-movies',
  templateUrl: './profile-continue-movies.component.html',
  styleUrls: ['./profile-continue-movies.component.scss']
})
export class ProfileContinueMoviesComponent implements OnInit {
  continueMovies: ContinueMovies[] = [];

  constructor(
    private continueMovieService: ContinueMovieService,
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getContinueMovies();
  }

  getContinueMovies() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
      let user: User = resUser[0];
      console.log(user);
      this.continueMovieService.getContinueMovies(user.id).subscribe(res2 => {
        this.continueMovies = res2;
      });
    });
  }

  deleteMovieInContinueMovies(id: number) {
    this.continueMovieService.deleteMovie(id).subscribe(() => {
      this.getContinueMovies();
    });
  }

}
