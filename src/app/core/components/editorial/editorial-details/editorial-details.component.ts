import { Component, OnInit } from '@angular/core';
import {Editorial} from '../../../objects/editorial';
import {ActivatedRoute, Router} from '@angular/router';
import {EditorialListService} from '../../../services/editorial-list.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../objects/user';
import {Movie} from '../../../objects/movie';
import {MovieService} from '../../../services/movie.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-editorial-details',
  templateUrl: './editorial-details.component.html',
  styleUrls: ['./editorial-details.component.scss']
})
export class EditorialDetailsComponent implements OnInit {
  editor: Editorial;
  editorId: number;
  user: User;
  movies: Movie[] = [];
  editors: Editorial[] = [];
  authUserId: number;

  constructor(
    private route: ActivatedRoute,
    private editorialListService: EditorialListService,
    private userService: UserService,
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editorId = +this.route.snapshot.paramMap.get('id');
    this.getEditor();
    this.getAuthUser();
  }

  getAuthLogin() {
    return this.authService.authUserLogin;
  }

  getEditor() {
    this.editorialListService.getEditorialById(this.editorId).subscribe(res => {
      this.editor = res;

      let request = '';

      for (let i = 0; i < this.editor.movieIds.length; i++) {
        if (i < this.editor.movieIds.length - 1) {
          request += 'id=' + this.editor.movieIds[i] + '&';
        } else {
          request += 'id=' + this.editor.movieIds[i];
        }
      }

      this.userService.getUserById(this.editor.userId).subscribe(userRes => {
        this.user = userRes;
      });

      this.movieService.getMoviesById(request).subscribe(moviesRes => {
        this.movies = moviesRes;
      });

      this.userService.getUserEditorialsWithNe(this.editor.userId, this.editor.id).subscribe(resUser => {
        this.editors = resUser;
      });
    });
  }

  getAuthUser() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(res => {
      this.authUserId = res[0].id;
    });
  }

  canDo(): boolean {
    for (let id of this.editor.subscriber) {
      if (id === this.authUserId) {
        return false;
      }
    }

    return (this.authService.authUserLogin !== this.user.login);
  }

  doSubs() {
    this.editor.subscriber.push(this.authUserId);
    this.editorialListService.updateOnlySubs(this.editor).subscribe(res => {
      this.getEditor();
    });
  }

  doUnSubs() {
    let newSubs: number[] = [];
    console.log(this.authUserId + ': dddd');
    for (let id of this.editor.subscriber) {
      if (id !== this.authUserId) {
        newSubs.push(id);
      }
    }

    this.editor.subscriber = newSubs;

    console.log(newSubs);
    this.editorialListService.updateOnlySubs(this.editor).subscribe(res => {
      this.getEditor();
    });
  }

  navigateToEdit() {
    this.router.navigate([`/editorial/${this.editorId}/edit`]);
  }
}
