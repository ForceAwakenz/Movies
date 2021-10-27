import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  movieApiBaseUrl = 'http://api.themoviedb.org/3/movie/';
  movieApiKey = '?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';

  constructor(private http: HttpClient) { 
  }

  getNowPlayingMovies() {
    return this.http.get(`${this.movieApiBaseUrl}now_playing${this.movieApiKey}`)
    .pipe( map((data: any) => data.results) );
  }

}
