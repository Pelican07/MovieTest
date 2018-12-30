import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getInfosApi() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2c1ba2ad92bff0e983a01cbcf3ed33b1');
  }
}
