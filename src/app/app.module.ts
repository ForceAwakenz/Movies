import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDataService } from './movie-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
