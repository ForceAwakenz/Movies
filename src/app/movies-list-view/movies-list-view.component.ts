import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMoviesListResponse } from '../shared/interfaces/movies-list-response';
import { MovieDataService } from '../shared/services/movie-data.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css']
})
export class MoviesListViewComponent implements OnInit {
  moviesListResponse: IMoviesListResponse;
  currentPage: number = 1;
  totalPages: number;

  constructor(private movieDataService: MovieDataService,
    private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.movieDataService.getMoviesListResponse(this.currentPage).subscribe((data: IMoviesListResponse) => {
      this.moviesListResponse = data;
      this.totalPages = data.total_pages;
    });
  }

  onPageChanged(gotoPage: number) {
    this.currentPage = gotoPage;
    this.router.navigate(['movies'], { queryParams: {page: gotoPage}});
  }

}
