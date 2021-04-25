import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from '../objects/banner';

@Injectable()
export class EditorialBoxService {
  api = 'http://localhost:3000';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) {}

  getBannerById(id: number): Observable<Banner> {
    return this.http.get<Banner>(this.api + `/banners/${id}`);
  }
}
