import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMoviesListResponse } from '../shared/interfaces/movies-list-response';
import { MovieDataService } from '../shared/services/movie-data.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css']
})
export class MoviesListViewComponent implements OnInit {
  moviesListResponse: IMoviesListResponse;
  currentPage: number;
  totalPages: number;

  constructor(private movieDataService: MovieDataService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.movieDataService.getMoviesListResponse(this.currentPage).subscribe((data: IMoviesListResponse) => {
      this.moviesListResponse = data;
      this.totalPages = data.total_pages;
    });
  }

}
