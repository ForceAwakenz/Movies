import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SearchSnippetComponent } from '../movies-list-view/search-snippet/search-snippet.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchControl: FormControl;
  searchPhrase: string;

  dialogRef: MatDialogRef<SearchSnippetComponent>;
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.searchControl = new FormControl('search');
    this.searchControl.valueChanges.pipe().subscribe(value => {
      console.log(value);
      const movies: any[] = [];


      if (!this.dialogRef) {
        this.dialogRef = this.dialog.open(SearchSnippetComponent, {
          data: movies,
          width: '400px',
          hasBackdrop: false,
          position: {
            top: '35px',
            left: '70px'
          }
        });
        return;
     }

     this.dialogRef.componentInstance.movies = movies;   
    })
  }

  onSearchInputChanges(inputElement: string) {
    // console.log(inputElement)
  }

}
