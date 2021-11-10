import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { IMoviesListResponse } from '../interfaces/movies-list-response';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private movieApiBaseUrl = 'http://api.themoviedb.org/3/';
  private movieApiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c';
  private coreHttpParams = new HttpParams().set('api_key', this.movieApiKey);

  constructor(private http: HttpClient) {}

  getMoviesListResponse$(pageNumber: number): Observable<IMoviesListResponse> {
    return this.http.get<IMoviesListResponse>(`${this.movieApiBaseUrl}movie/now_playing`, 
      {params: this.coreHttpParams.set('page', pageNumber)});
  }

  getMovieById(id: string):Observable<IMovie> { 
    return this.http.get<IMovie>(`${this.movieApiBaseUrl}movie/674025`, {params: this.coreHttpParams});
  }

  getMoviesByKeyword(searchPhrase: string): Observable<IMoviesListResponse>  {
    return this.http.get<IMoviesListResponse>(`${this.movieApiBaseUrl}search/movie`, 
      {params: this.coreHttpParams.set('query', searchPhrase)});
  }

}
