import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../shared/services/movie-data.service';

import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { MoviesListViewComponent } from './movies-list-view.component';
import { MovieCategoryHeaderComponent } from './movie-category-header/movie-category-header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
    MoviesComponent,
    MovieItemComponent,
    HighlightDirective,
    MoviesListViewComponent,
    MovieCategoryHeaderComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
