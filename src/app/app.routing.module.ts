import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowPlayingComponent } from './now-playing/now-playing.component';

 const routes: Routes = [
   { path: 'movies', component: NowPlayingComponent},
   { path: '**', redirectTo: 'movies', pathMatch: 'full' },

 ];
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }