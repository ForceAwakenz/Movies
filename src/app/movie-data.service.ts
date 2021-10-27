import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private movieApiBaseUrl = 'http://api.themoviedb.org/3/movie/';
  private movieApiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c';

  constructor(private http: HttpClient) { 
  }

  getNowPlayingMovies(): Observable<any> {
    return this.http.get(`${this.movieApiBaseUrl}now_playing?api_key=${this.movieApiKey}`)
    .pipe( map((data: any) => data.results) );
  }

}
