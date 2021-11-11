import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.css']
})
export class SearchElementComponent {
  @Input() movie: IMovie;
  @Output() onMovieClick = new EventEmitter<void>();

  onMovieClickAction() {
    this.onMovieClick.emit();
  }

}
