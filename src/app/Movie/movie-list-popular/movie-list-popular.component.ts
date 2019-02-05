import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list-popular',
  templateUrl: './movie-list-popular.component.html',
  styleUrls: ['./movie-list-popular.component.css'],
  providers: [ MovieService ]
})
export class MovieListPopularComponent implements OnInit {
  movies: object[];

  constructor(public movieservice: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieservice.getPopularApi()
    .subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    });
  }

}
