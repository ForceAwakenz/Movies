import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-snippet',
  templateUrl: './search-snippet.component.html',
  styleUrls: ['./search-snippet.component.css']
})
export class SearchSnippetComponent implements OnInit {
  movies: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
