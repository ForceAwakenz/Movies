import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() posterPath = '';
  private posterImageBaseUrl = 'http://image.tmdb.org/t/p/w342';
  private posterNotFoundUrl = 'https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png';

  get posterUrl(): string {
    if (this.posterPath == null) {
      return this.posterNotFoundUrl;
    }
    return `${this.posterImageBaseUrl}${this.posterPath}`;
  }

}
