import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../shared/services/movie-data.service';
import { IMovie } from '../shared/interfaces/movie';
import {switchMap, take, map, filter} from 'rxjs/operators';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/w342';

@Component({
  selector: 'app-movie-info',
  templateUrl: 'movie-info-component.component.html',
  styleUrls: ['movie-info-component.component.css'],
  providers: [MovieDataService]
})

export class MovieInfoComponentComponent implements OnInit {
  movie!: IMovie;
    
  constructor(private movieService: MovieDataService, private activatedRoute: ActivatedRoute){
  }

  getMovieInfo(): void{
    this.activatedRoute.paramMap
      .pipe(
        take(1),
        filter(params => !!params.get('id')),
        switchMap(params => this.movieService.getMovieById(params.get('id')as string))
      ) 
      .subscribe((movie : any) => {
        this.movie = movie;
          })
        }

  getMovieImageUrl(imagePath: string): string { 
    return BASE_IMAGE_URL + imagePath;
  }

  ngOnInit(): void{
    this.getMovieInfo();
  }
}
