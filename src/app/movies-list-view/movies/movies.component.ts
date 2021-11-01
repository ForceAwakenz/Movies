import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { MovieDataService } from '../../shared/services/movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesList: IMovie[];

  constructor(private movieDataService: MovieDataService,
    private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.loadMovies(params.page);
    })
  }

  trackByFn(index: number, movie: IMovie): number {
    return movie.id
  }
  
  private loadMovies(pageNumber: string): void {
    this.movieDataService.getNowPlayingMovies(pageNumber).subscribe((data: IMovie[]) => this.moviesList = data);
  }
}
