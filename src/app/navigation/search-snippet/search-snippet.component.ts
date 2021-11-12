import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-search-snippet',
  templateUrl: './search-snippet.component.html',
  styleUrls: ['./search-snippet.component.css']
})

export class SearchSnippetComponent implements OnInit {
  movies: IMovie[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IMovie[], 
    private dialogRef: MatDialogRef<SearchSnippetComponent>) {}

  ngOnInit(): void {
    this.movies = this.data;
  }

  onMovieClicked(id: number): void {
    this.dialogRef.close({id});
  }
  
}
