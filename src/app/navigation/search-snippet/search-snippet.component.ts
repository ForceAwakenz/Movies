import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-snippet',
  templateUrl: './search-snippet.component.html',
  styleUrls: ['./search-snippet.component.css']
})
export class SearchSnippetComponent implements OnInit {
  movies: any[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: any[], private dialogRef: MatDialogRef<SearchSnippetComponent>) { }

  ngOnInit(): void {
    this.movies = this.data;
  }

  onMovieClicked(id: number): void {
    this.dialogRef.close({id});
  }
}
