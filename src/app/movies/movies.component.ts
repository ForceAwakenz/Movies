import { Component, Input, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
dataBase : any;
@Input() category = '';

  constructor(private movieDataService: MovieDataService) { 
    movieDataService.nowPlayingDBPromise.then(data => this.dataBase = data.results);
  }
  
  ngOnInit(): void {    
  }

}
