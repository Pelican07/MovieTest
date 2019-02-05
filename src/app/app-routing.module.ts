import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccueilComponent } from './Accueil/page-accueil/page-accueil.component';
import { MovieComponent } from './Movie/movie/movie.component';
import { MovieListPopularComponent } from './Movie/movie-list-popular/movie-list-popular.component';
import { MovieListBestyearComponent } from './Movie/movie-list-bestyear/movie-list-bestyear.component';
import { MovieListBestgenreComponent } from './Movie/movie-list-bestgenre/movie-list-bestgenre.component';

const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'moviePopular', component: MovieListPopularComponent},
  { path: 'movieBest', component: MovieListBestyearComponent },
  { path: 'movieGenre', component: MovieListBestgenreComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
