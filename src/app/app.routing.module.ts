import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListViewComponent, pathMatch: 'full'},
  { path: 'movies/:id', component: MovieInfoComponentComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' },
 ];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
