import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IMoviesListResponse {
  dates: string,
  page: number,
  results: Results[], // temporarily, until I get IMovie interface from Alena
  total_pages: number,
  total_results: number
};

interface Results {
  id?: number
}

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private movieApiBaseUrl = 'http://api.themoviedb.org/3/movie/';
  private movieApiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c';

  constructor(private http: HttpClient) { 
  }

  getNowPlayingMovies(): Observable<Results[]> {
    return this.http.get<IMoviesListResponse>(`${this.movieApiBaseUrl}now_playing?api_key=${this.movieApiKey}`)
      .pipe( 
        map((data: IMoviesListResponse) => data.results) 
      );
  }

}
