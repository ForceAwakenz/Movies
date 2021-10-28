import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../shared/services/movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesList: any;

  constructor(private movieDataService: MovieDataService) { 
  }

  ngOnInit(): void {
    this.movieDataService.getNowPlayingMovies().subscribe(data => this.moviesList = data);
  }

  trackByFn(index: any, movie: any): number {
    return movie.id
  }

}
