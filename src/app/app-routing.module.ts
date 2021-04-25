import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {CatalogComponent} from './core/components/catalog/catalog.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {AuthStatusGuard} from './core/guards/auth-status.guard';
import {LoginComponent} from './core/components/login/login.component';
import {NavBarGuard} from './core/guards/nav-bar.guard';
import {LoginPageGuard} from './core/guards/login-page.guard';
import {ProfilePageChildCompAccessGuard} from './core/guards/profile-page-child-comp-access.guard';
import {SignUpComponent} from './core/components/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'selection',
    loadChildren: () => import('./core/modules/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./core/modules/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'editorial',
    loadChildren: () => import('./core/modules/editorial/editorial.module').then(m => m.EditorialModule)
  },
  { path: 'catalog/:type', component: CatalogComponent },
  {
    path: 'profile',
    loadChildren: () => import('./core/modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthStatusGuard],
    canActivateChild: [ProfilePageChildCompAccessGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginPageGuard],
    canDeactivate: [NavBarGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoginPageGuard],
    canDeactivate: [NavBarGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
