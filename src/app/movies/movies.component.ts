import { Component } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
dataBase: any;

  constructor(private movieDataService: MovieDataService) { 
    movieDataService.getNowPlayingMovies().subscribe(data => {this.dataBase = data});
  }


}
