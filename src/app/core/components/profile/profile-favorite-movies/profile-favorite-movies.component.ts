import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../objects/movie';
import {UserService} from '../../../services/user.service';
import {User} from '../../../objects/user';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-profile-favorite-movies',
  templateUrl: './profile-favorite-movies.component.html',
  styleUrls: ['./profile-favorite-movies.component.scss']
})
export class ProfileFavoriteMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
      let movieIds: number[] = resUser[0].favoriteMovie;
      let request = '';

      for (let i = 0; i < movieIds.length; i++) {
        if (i < movieIds.length - 1) {
          request += 'id=' + movieIds[i] + '&';
        } else {
          request += 'id=' + movieIds[i];
        }
      }
      if (request !== '') {
        this.movieService.getMoviesById(request).subscribe(resMovies => {
          this.movies = resMovies;
        });
      }

    });
  }

}
