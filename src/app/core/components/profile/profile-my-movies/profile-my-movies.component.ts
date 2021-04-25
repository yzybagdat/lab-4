import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../objects/movie';
import {MovieService} from '../../../services/movie.service';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-profile-my-movies',
  templateUrl: './profile-my-movies.component.html',
  styleUrls: ['./profile-my-movies.component.scss']
})
export class ProfileMyMoviesComponent implements OnInit {
  myMovies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getMyMovies();
  }

  getMyMovies() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
      let movieIds: number[] = resUser[0].myMovies;
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
          this.myMovies = resMovies;
        });
      }
    });
  }

}
