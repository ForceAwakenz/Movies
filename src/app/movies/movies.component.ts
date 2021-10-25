import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
dataBase : any = [];

  constructor(private movieDataService: MovieDataService) { 
    movieDataService.dbPromise.then(data => this.dataBase = data.results);
}
  
  ngOnInit(): void {    
  }

}
