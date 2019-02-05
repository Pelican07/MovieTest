import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list-bestyear',
  templateUrl: './movie-list-bestyear.component.html',
  styleUrls: ['./movie-list-bestyear.component.css'],
  providers: [ MovieService ]
})
export class MovieListBestyearComponent implements OnInit {
  movies: object[];

  constructor(public movieservice: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieservice.getBestApi()
    .subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    });
  }

}
