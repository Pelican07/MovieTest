import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [ MovieService ]
})
export class MovieComponent implements OnInit {
  movies: object[];

  constructor(public movieservice: MovieService) {

  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieservice.getInfosApi()
    .subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    });
  }

}
