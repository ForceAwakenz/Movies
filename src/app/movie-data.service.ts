import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  nowPlayingUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';


  constructor(private http: HttpClient) { 
  }

  getNowPlayingMovies() {
    return this.http.get(`${this.nowPlayingUrl}`)
    .pipe( map((data: any) => data.results) );
  }

}
