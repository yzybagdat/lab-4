import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecommendationComponent } from './homepage/recommendation/recommendation.component';
import { NewOnTheSiteComponent } from './homepage/new-on-the-site/new-on-the-site.component';
import { LatesUpdatesComponent } from './homepage/lates-updates/lates-updates.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { SearchFormComponent } from './catalogpage/search-form/search-form.component';
import { NewspageComponent } from './newspage/newspage.component';
import { RandomAnimePageComponent } from './random-anime-page/random-anime-page.component';
import { LoginComponent } from './header/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    RecommendationComponent,
    NewOnTheSiteComponent,
    LatesUpdatesComponent,
    CatalogpageComponent,
    SearchFormComponent,
    NewspageComponent,
    RandomAnimePageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

