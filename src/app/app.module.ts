import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './Movie/movie/movie.component';
import { MovieListPopularComponent } from './Movie/movie-list-popular/movie-list-popular.component';
import { MovieListBestyearComponent } from './Movie/movie-list-bestyear/movie-list-bestyear.component';
import { MovieListBestgenreComponent } from './Movie/movie-list-bestgenre/movie-list-bestgenre.component';
import { NavbarComponent } from './Accueil/navbar/navbar.component';
import { FooterComponent } from './Accueil/footer/footer.component';
import { BoutonsAccueilComponent } from './Accueil/boutons-accueil/boutons-accueil.component';
import { PageAccueilComponent } from './Accueil/page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListPopularComponent,
    MovieListBestyearComponent,
    MovieListBestgenreComponent,
    NavbarComponent,
    FooterComponent,
    BoutonsAccueilComponent,
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
