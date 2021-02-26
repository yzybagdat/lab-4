import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { RandomAnimePageComponent } from './random-anime-page/random-anime-page.component';
import { LoginComponent } from './header/login/login.component';

const routes: Routes = [
 { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'catalogpage', component: CatalogpageComponent },
    { path: 'newspage', component: NewspageComponent },
    { path: 'random-anime-page', component: RandomAnimePageComponent },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
