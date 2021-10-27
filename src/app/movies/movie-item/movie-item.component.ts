import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() posterPath = '';
  posterUrl = '';
  posterImageBaseUrl = 'http://image.tmdb.org/t/p/w342';

  getPosterUrl() {
    return `${this.posterImageBaseUrl}${this.posterPath}`;
  }

}
