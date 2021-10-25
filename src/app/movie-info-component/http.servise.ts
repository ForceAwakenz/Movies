import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('http://api.themoviedb.org/3/movie/674025?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
    }
}