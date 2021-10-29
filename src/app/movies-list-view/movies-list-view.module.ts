import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../shared/services/movie-data.service';

import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { MoviesListViewComponent } from './movies-list-view.component';
import { MovieCategoryHeaderComponent } from './movie-category-header/movie-category-header.component';

@NgModule({
  declarations: [    
    MoviesComponent,
    MovieItemComponent,
    HighlightDirective,
    MoviesListViewComponent,
    MovieCategoryHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesComponent,
    MovieItemComponent,
    HighlightDirective,
    MoviesListViewComponent
  ],
  providers: [MovieDataService]
})
export class MoviesListViewModule { }