import { Injectable } from '@angular/core';
import {User} from '../objects/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Editorial} from '../objects/editorial';

@Injectable()
export class UserService {
  api = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) {}

  getUserByLogin(login: string): Observable<User> {
    return this._http.get<User>(this.api + `/users?login=${login}`);
  }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(this.api + `/users/${id}`);
  }

  hasLogin(login: string): Observable<any> {
    return this._http.get<Response>(this.api + `/users?login=${login}`);
  }

  createUser(user): Observable<User> {
    return this._http.post<User>(this.api + `/users`, user);
  }

  updateUser(user: User) {
    return this._http.patch(this.api + `/users/${user.id}`, user);
  }

  getUserEditorialsWithNe(id: number, neId: number): Observable<Editorial[]> {
    return this._http.get<Editorial[]>(this.api + `/users/${id}/editorials?id_ne=${neId}`);
  }
}
