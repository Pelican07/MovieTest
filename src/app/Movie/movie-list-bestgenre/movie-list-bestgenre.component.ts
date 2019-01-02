import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list-bestgenre',
  templateUrl: './movie-list-bestgenre.component.html',
  styleUrls: ['./movie-list-bestgenre.component.css'],
  providers: [ MovieService ]
})
export class MovieListBestgenreComponent implements OnInit {
  movies: object[];

  constructor(public movieservice: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieservice.getGenreApi()
    .subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    });
  }
}
