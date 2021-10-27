import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../movie-data.service';

import { MoviesComponent } from '../movies/movies.component';
import { MovieItemComponent } from '../movies/movie-item/movie-item.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { NowPlayingComponent } from '../now-playing/now-playing.component';

@NgModule({
  declarations: [    
    MoviesComponent,
    MovieItemComponent,
    NavbarComponent,
    HighlightDirective,
    NowPlayingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesComponent,
    MovieItemComponent,
    NavbarComponent,
    HighlightDirective,
    NowPlayingComponent
  ],
  providers: [MovieDataService]
})
export class NowPlayingModule { }
