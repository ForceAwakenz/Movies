import { Component, Input, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  dataBase : any;
  @Input() movieIndex!: number;
  
  constructor(private movieDataService: MovieDataService) { 
    movieDataService.nowPlayingDBPromise.then(data => this.dataBase = data.results);
  }

  ngOnInit(): void {
  }

}
