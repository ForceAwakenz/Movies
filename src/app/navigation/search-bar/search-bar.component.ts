import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Helper } from 'src/app/shared/helpers/helper';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';
import { MovieDataService } from 'src/app/shared/services/movie-data.service';
import { SearchSnippetComponent } from '../search-snippet/search-snippet.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchControl: FormControl;
  dialogRef: MatDialogRef<SearchSnippetComponent>;
  
  constructor(    
    private dialog: MatDialog,
    private router: Router,
    private movieDataService: MovieDataService
  ) {}

  ngOnInit(): void {
    this.searchControlListener$().subscribe(movies => this.fillSearchBar(movies));
  }

  searchControlListener$(): Observable<IMovie[]> {
    this.searchControl = new FormControl();
    return this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(searchPhrase => searchPhrase.length > 2),
      switchMap((searchPhrase) => this.movieDataService.getMoviesByKeyword(searchPhrase)),
      map(movieList => movieList.results.slice(0, 5)),
    )
      
  }

  fillSearchBar(movies: IMovie[]): void {
    movies = Helper.emptyPosterResolver(movies);

    if (!this.dialogRef?.componentInstance) {

      this.dialogRef = this.dialog.open(SearchSnippetComponent, 
        {
          data: movies,
        ...this.getMatDialogBaseConfig()
        }
      );
      
      this.dialogRef.afterClosed()
        .pipe(
          filter(data => data.id),
        )
        .subscribe(data => this.router.navigate(['movies', data.id]));

      return;

    }
        
    this.dialogRef.componentInstance.movies = movies;   

  }
      
  getMatDialogBaseConfig() {
    return {
      width: '400px',
      hasBackdrop: false,
      position: {
        top: '35px',
        left: '70px'
      },
      autoFocus: false
    };
  }

}
