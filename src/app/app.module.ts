import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

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
import { ConverterPipe } from './pipes/converter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './newspage/post/post.component';
import { ProductComponent } from './product/product.component';
import { AuthGuardService } from './route-guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';

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
    LoginComponent,
    ConverterPipe,
    PostComponent,
    ProductComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService,AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

