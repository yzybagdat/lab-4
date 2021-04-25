import { Component, OnInit } from '@angular/core';
import {Movie} from '../../core/objects/movie';
import {EditorialBoxService} from '../../core/services/editorial-box.service';
import {Banner} from '../../core/objects/banner';
import {MovieService} from '../../core/services/movie.service';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  k: number;
  total: number;
  movies: Movie[];
  banner: Banner;

  constructor(
    private editorialBoxService: EditorialBoxService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getEditorials();
    this.k = 0;
    this.total = 0;
  }

  nextMovie() {
    if (this.k < this.movies.length - 1) {
      this.total = 100 * ++this.k;
    }
  }

  prevMovie() {
    if (this.k > 0) {
      this.total = 100 * --this.k;
    }
  }

  getEditorials() {
    this.editorialBoxService.getBannerById(1).subscribe(res => {
      this.banner = res;

      let request = '';

      for (let i = 0; i < this.banner.movieIds.length; i++) {
        if (i < this.banner.movieIds.length - 1) {
          request += 'id=' + this.banner.movieIds[i] + '&';
        } else {
          request += 'id=' + this.banner.movieIds[i];
        }
      }

      this.movieService.getMoviesById(request).subscribe(movRes => {
        this.movies = movRes;
      });
    });
  }

}
