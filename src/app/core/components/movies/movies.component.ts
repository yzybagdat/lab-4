import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  genre: string;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.genre = this.route.snapshot.paramMap.get('genre');
    this.getMovies();
  }

  getMovies() {
    this.movieService.get10MoviesByGenre(this.genre).subscribe(res => {
      this.movies = res;
    });
  }

}
