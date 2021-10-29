import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { MovieDataService } from '../../shared/services/movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesList: IMovie[];

  constructor(private movieDataService: MovieDataService) { 
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  trackByFn(index: number, movie: IMovie): number {
    return movie.id
  }
  
  private loadMovies(): void {
    this.movieDataService.getNowPlayingMovies().subscribe((data: IMovie[]) => this.moviesList = data);
  }
}
