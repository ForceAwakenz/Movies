import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view.component';

 const routes: Routes = [
   { path: 'movies', component: MoviesListViewComponent},
   { path: '**', redirectTo: 'movies', pathMatch: 'full' },

 ];
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }