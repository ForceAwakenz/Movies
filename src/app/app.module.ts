import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MoviesListViewModule } from './movies-list-view/movies-list-view.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    MovieInfoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { 
}
