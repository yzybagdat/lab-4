export class User {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public photoUrl: string,
    public myMovies: number[],
    public favoriteMovie: number[],
    public subscribeEditorials: number[],
  ) {}
}
