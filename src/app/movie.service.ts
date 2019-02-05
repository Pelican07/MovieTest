import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularApi() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2c1ba2ad92bff0e983a01cbcf3ed33b1');
  }

  getBestApi() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=vote_average.desc&api_key=2c1ba2ad92bff0e983a01cbcf3ed33b1');
  }

  getGenreApi() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=2c1ba2ad92bff0e983a01cbcf3ed33b1');
  }
}
