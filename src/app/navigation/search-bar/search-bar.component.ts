import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, take } from 'rxjs/operators';
import { Helper } from 'src/app/shared/helpers/helper';
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
    this.func();
  }

  func() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(searchPhrase => searchPhrase.length > 2),
      switchMap((searchPhrase) => this.movieDataService.getMoviesByKeyword(searchPhrase)),
      map(movieList => movieList.results.slice(0, 5)),
    ).subscribe(movies => {
      movies = Helper.emptyPosterResolver(movies);
      if (!this.dialogRef) {
        this.dialogRef = this.dialog.open(SearchSnippetComponent, {
          data: movies,
          ...this.getMatDialogBaseConfig()
          }
        );

        this.dialogRef.afterClosed()
          .pipe(
            filter(data => data.id),
            take(1)
          )
          .subscribe(data => this.router.navigate(['movies', data.id]));

        return;
      }
      
      this.dialogRef.componentInstance.movies = movies;   
    })
  }

  getMatDialogBaseConfig(): {} {
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
