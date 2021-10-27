import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() posterPath = '';
  private posterImageBaseUrl = 'http://image.tmdb.org/t/p/w342';

  get posterUrl(): string {
    return `${this.posterImageBaseUrl}${this.posterPath}`;
  }

}
