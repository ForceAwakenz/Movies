import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'movies/:id', component: MovieInfoComponentComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router){
  }
  ngOnInit():void {
    this.router.navigate(['movies',674025]);
  }
}
