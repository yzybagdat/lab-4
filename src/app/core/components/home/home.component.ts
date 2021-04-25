import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  genres = ['adventure', 'detective', 'comedy', 'drama'];
  status;
  inputData1: Movie[] = [];
  inputData2: Movie[] = [];
  inputData3: Movie[] = [];
  inputData4: Movie[] = [];
  bannerId = 1;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.status = 'qwe';
    this.getInputData1();
    this.getInputData2();
    this.getInputData3();
    this.getInputData4();
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  getInputData1() {
    this.movieService.get10MoviesByGenre(this.genres[0]).subscribe(res => {
      this.inputData1 = res;
    });
  }

  getInputData2() {
    this.movieService.get10MoviesByGenre(this.genres[1]).subscribe(res => {
      this.inputData2 = res;
    });
  }

  getInputData3() {
    this.movieService.get10MoviesByGenre(this.genres[2]).subscribe(res => {
      this.inputData3 = res;
    });
  }

  getInputData4() {
    this.movieService.get10MoviesByGenre(this.genres[3]).subscribe(res => {
      this.inputData4 = res;
    });
  }

}
