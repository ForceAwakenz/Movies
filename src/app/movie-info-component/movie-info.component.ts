import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../shared/services/movie-data.service';
import { IMovie } from '../shared/interfaces/movie.interface';
import { switchMap, filter } from 'rxjs/operators';
import { Helper } from '../shared/helpers/helper';

@Component({
  selector: 'app-movie-info',
  templateUrl: 'movie-info.component.html',
  styleUrls: ['movie-info.component.css'],
})

export class MovieInfoComponent implements OnInit {
  movie!: IMovie;
    
  constructor(
    private movieService: MovieDataService, 
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.getMovieInfo();
  }

  getMovieInfo(): void {
    this.activatedRoute.paramMap
      .pipe(
        filter(params => !!params.get('id')),
        switchMap(params => this.movieService.getMovieById(params.get('id')as string))
      ) 
      .subscribe((movie : any) => [this.movie] = Helper.emptyPosterResolver([movie]) );
  }

}
