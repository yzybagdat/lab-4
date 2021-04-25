import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailsComponent} from '../../components/movies/movie-details/movie-details.component';
import {MoviesComponent} from '../../components/movies/movies.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'genre/:genre',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }
