import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  @Input() moviesList: IMovie[];

  trackByFn(index: number, movie: IMovie): number {
    return movie.id
  }

}
