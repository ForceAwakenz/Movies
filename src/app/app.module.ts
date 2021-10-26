import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDataService } from './movie-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    NavbarComponent,
    HighlightDirective,
    MoviesCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
