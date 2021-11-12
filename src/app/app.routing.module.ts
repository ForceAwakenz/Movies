import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view.component';
import { MovieInfoComponent } from './movie-info-component/movie-info.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListViewComponent, pathMatch: 'full' },
  { path: 'movies/:id', component: MovieInfoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
