import {Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges, DoCheck} from '@angular/core';
import {Movie} from '../../../core/objects/movie';
import {ContinueMovies} from '../../../core/objects/continue-movies';
import {MovieService} from '../../../core/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Output() deleteMoviesInHistoryWatching = new EventEmitter<number>();
  @Input() continueMovie: ContinueMovies;
  movie: Movie;
  percent: string;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`CardComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    // console.log('CardComponent: OnInit(set percent variable)');
    this.getMovie();
    // this.percent = Math.floor(this.continueMovie.watchTime * 100 / this.movie.totalTime) + '%';
  }

  ngDoCheck() {
    // console.log('CardComponent: DoCheck');
  }

  ngOnDestroy() {
    // console.log('CardComponent: OnDestroy');
  }

  deleteMovieInHistory() {
    console.log("delete: " + this.continueMovie.id);
    this.deleteMoviesInHistoryWatching.emit(this.continueMovie.id);
  }

  getMovie() {
    this.movieService.getMovieById(this.continueMovie.movieId).subscribe(res => {
      this.movie = res;
    });
  }

  getPercent(): string {
    return Math.floor(this.continueMovie.watchTime * 100 / this.movie.totalTime) + '%';
  }
}
