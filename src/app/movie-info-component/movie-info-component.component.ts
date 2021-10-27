import { Component, OnInit } from '@angular/core';
import {Movie} from './movie';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movie-info',
  templateUrl: 'movie-info-component.component.html',
  styleUrls: ['movie-info-component.component.css'],
})
export class MovieInfoComponentComponent implements OnInit {
  movie : Movie | undefined;
  response:any;
  logo:any;
  bacground: any;
  id: number | undefined;
      constructor(private http: HttpClient){}
  getMovieById(){
    return   this.http.get('http://api.themoviedb.org/3/movie/674025?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
    .subscribe((response:any) => {
      this.response=response;
            this.logo= "http://image.tmdb.org/t/p/w342" + response.poster_path;
            this.bacground = "http://image.tmdb.org/t/p/w342" +response.backdrop_path;
        })
      }
  ngOnInit(): void{
    this.getMovieById();
    }

}
