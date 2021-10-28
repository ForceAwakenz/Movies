import { Component, OnInit } from '@angular/core';
import {IMovie} from './Movie';
import {HttpService} from './http.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: 'movie-info-component.component.html',
  styleUrls: ['movie-info-component.component.css'],
  providers: [HttpService]
})

export class MovieInfoComponentComponent implements OnInit {
  movie: IMovie | any;
  logo:any;
  bacground: any;
  id: number | undefined;
  url: string;
  
  constructor(private httpService: HttpService){
    this.url='http://image.tmdb.org/t/p/w342';
  }

  getMovieById(){
    return   this.httpService.getData()
    .subscribe((movie:any) => {
      this.movie=movie;
        })
      }

  getMovieImageUrl(imagePath: string): string { 
    return this.url + imagePath;
  }

  ngOnInit(): void{
    this.getMovieById();
    }
}
