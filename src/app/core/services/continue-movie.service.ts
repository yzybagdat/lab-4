import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContinueMovies} from '../objects/continue-movies';
import {Movie} from '../objects/movie';

@Injectable()
export class ContinueMovieService {
  api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) {}

  public getContinueMovies(id: number): Observable<ContinueMovies[]> {
    return this.http.get<ContinueMovies[]>(this.api + `/users/${id}/continueMovies`);
  }

  public deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(this.api + `/continueMovies/${id}`);
  }

  public getContinueMoviesUserAndMovie(idUser, idMovie): Observable<Movie> {
    return this.http.get<Movie>(this.api + `/continueMovies?userId=${idUser}&movieId=${idMovie}`);
  }
}
