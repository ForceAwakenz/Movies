import { Component, Input } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  dataBase : any;
  @Input() movieIndex!: number;
  picUrl = '';
  
  constructor(private movieDataService: MovieDataService) { 
    movieDataService.nowPlayingDBPromise.then(data => this.dataBase = data.results);
  }
}
