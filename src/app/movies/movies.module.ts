import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from '../movie-data.service';

import { MoviesComponent } from '../movies/movies.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
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
  providers: [MovieDataService]
})
export class MoviesModule { }
