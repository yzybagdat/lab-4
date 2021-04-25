import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  status: string;
  inputData1: Movie[] = [];
  inputData2: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.status = 'qwe';
    this.getInputData1();
    this.getInputData2();
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  getInputData1() {
    this.movieService.get10MoviesByGenreForShop('drama').subscribe(res => {
      this.inputData1 = res;
    });
  }

  getInputData2() {
    this.movieService.get10MoviesByGenreForShop('feature film').subscribe(res => {
      this.inputData2 = res;
    });
  }
}
