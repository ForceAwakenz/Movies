import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../movie-data.service';

import { MoviesComponent } from '../movies/movies.component';
import { MovieItemComponent } from '../movies/movie-item/movie-item.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { NowPlayingComponent } from '../now-playing/now-playing.component';

@NgModule({
  declarations: [    
    MoviesComponent,
    MovieItemComponent,

    HighlightDirective,
    NowPlayingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesComponent,
    MovieItemComponent,
    HighlightDirective,
    NowPlayingComponent
  ],
  providers: [MovieDataService]
})
export class NowPlayingModule { }
