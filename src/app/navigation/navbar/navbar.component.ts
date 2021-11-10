import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { SearchSnippetComponent } from '../search-snippet/search-snippet.component';
import { MovieDataService } from '../../shared/services/movie-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchControl: FormControl;
  searchPhrase: string;

  dialogRef: MatDialogRef<SearchSnippetComponent>;
  
  constructor(
    private dialog: MatDialog,
    private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(searchPhrase => searchPhrase.length > 2),
      switchMap((searchPhrase) => this.movieDataService.getMoviesByKeyword(searchPhrase))
    ).subscribe(movies => {
      let cleanMoviesList = movies.results.filter(movie => movie['poster_path']);
      if (!this.dialogRef) {
        this.dialogRef = this.dialog.open(SearchSnippetComponent, {
          data: cleanMoviesList,
          ...this.getMatDialogBaseConfig()
          }
        );
        return;
      }
      this.dialogRef.componentInstance.movies = cleanMoviesList;   
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
