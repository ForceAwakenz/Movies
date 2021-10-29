import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMovie} from './movie'; 
  
@Injectable()
export class MovieService{
  
    constructor(private http: HttpClient){ }
      
    getMovieById(id: string):Observable<IMovie> { 
        return this.http.get<IMovie>('http://api.themoviedb.org/3/movie/674025?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
    }
}