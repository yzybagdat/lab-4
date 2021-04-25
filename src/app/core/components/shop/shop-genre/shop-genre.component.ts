import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../objects/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-shop-genre',
  templateUrl: './shop-genre.component.html',
  styleUrls: ['./shop-genre.component.scss']
})
export class ShopGenreComponent implements OnInit {
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
    this.movieService.get10MoviesByGenreForShop(this.genre).subscribe(res => {
      this.movies = res;
    });
  }

}
