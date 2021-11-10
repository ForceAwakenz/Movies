import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MoviesListViewModule } from './movies-list-view/movies-list-view.module';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchSnippetComponent } from './navigation/search-snippet/search-snippet.component';
import { SearchElementComponent } from './navigation/search-element/search-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    MovieInfoComponentComponent, 
    SearchElementComponent,
    SearchSnippetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesListViewModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchSnippetComponent]

})
export class AppModule { 
}
