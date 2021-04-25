import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ProfileContinueMoviesComponent} from '../../components/profile/profile-continue-movies/profile-continue-movies.component';
import {ProfileMyMoviesComponent} from '../../components/profile/profile-my-movies/profile-my-movies.component';
import {ProfileFavoriteMoviesComponent} from '../../components/profile/profile-favorite-movies/profile-favorite-movies.component';
import {ProfileMyEditorialsComponent} from '../../components/profile/profile-my-editorials/profile-my-editorials.component';
import {ProfileComponent} from '../../components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileContinueMoviesComponent,
      },
      {
        path: 'my-movies',
        component: ProfileMyMoviesComponent
      },
      {
        path: 'my-favorite-movies',
        component: ProfileFavoriteMoviesComponent
      },
      {
        path: 'my-editorials',
        component: ProfileMyEditorialsComponent
      }
    ]
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
export class ProfileRoutingModule { }
