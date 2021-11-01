import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { map } from 'rxjs/operators';
import { IMoviesListResponse } from '../interfaces/movies-list-response';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private movieApiBaseUrl = 'http://api.themoviedb.org/3/movie/';
  private movieApiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c';
  private coreHttpParams = new HttpParams().set('api_key', this.movieApiKey);

  constructor(private http: HttpClient) {}

  getNowPlayingMovies(pageNumber: string): Observable<IMovie[]> {
    return this.http.get<IMoviesListResponse>(`${this.movieApiBaseUrl}now_playing`, 
      {params: this.coreHttpParams.set('page', pageNumber)})
      .pipe( 
        map((data: IMoviesListResponse) => data.results) 
      );
  }

  getMovieById(id: string):Observable<IMovie> { 
    return this.http.get<IMovie>(`${this.movieApiBaseUrl}674025`, {params: this.coreHttpParams});
  }

  getPagesTotal(): Observable<number> {
    return this.http.get<IMoviesListResponse>(`${this.movieApiBaseUrl}now_playing`, 
      {params: this.coreHttpParams})
      .pipe( 
        map((data: IMoviesListResponse) => data.total_pages) 
      );
  }

}
