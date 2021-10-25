import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.servise';
import {Movie} from '../movie-info-component/movie';


@Component({
  selector: 'app-movie-info',
  templateUrl: 'movie-info-component.component.html',
  styleUrls: ['movie-info-component.component.css'],
  providers: [HttpService]

})
export class MovieInfoComponentComponent implements OnInit {
  
  movie: Movie |undefined ;
      constructor(private httpService: HttpService){}


  ngOnInit(){
        
      this.httpService.getData().subscribe((data:any) => this.movie=new Movie(data.title, data.id, data.release_date, data.vote_average, data.popularity, data.overview));
  }
}
