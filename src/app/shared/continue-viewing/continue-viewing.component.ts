import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ContinueMovieService} from '../../core/services/continue-movie.service';
import {AuthService} from '../../core/services/auth.service';
import {UserService} from '../../core/services/user.service';
import {ContinueMovies} from '../../core/objects/continue-movies';

@Component({
  selector: 'app-continue-viewing',
  templateUrl: './continue-viewing.component.html',
  styleUrls: ['./continue-viewing.component.scss']
})
export class ContinueViewingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  movies: ContinueMovies[] = [];

  constructor(
    private continueMovieService: ContinueMovieService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`ContinueViewingComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    this.getMovies();
  }

  ngDoCheck() {
    // console.log('ContinueViewingComponent: DoChek');
  }

  ngOnDestroy() {
    // console.log('ContinueViewingComponent: OnDestroy');
  }

  getMovies() {
    if (this.authService.isAuth()) {
      this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
        const userId = resUser[0].id;
        this.continueMovieService.getContinueMovies(userId).subscribe(res => {
          this.movies = res;
        });
      });
    }
  }

  deleteInArr(id: number) {
    this.continueMovieService.deleteMovie(id).subscribe(() => {
      this.getMovies();
    });
  }
}
