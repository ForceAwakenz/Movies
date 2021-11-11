import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { IMoviesListResponse } from '../shared/interfaces/movies-list-response';
import { IMovie } from '../shared/interfaces/movie.interface';
import { MovieDataService } from '../shared/services/movie-data.service';
import { Helper } from '../shared/helpers/helper';

@Component({
  selector: 'app-now-playing',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css']
})
export class MoviesListViewComponent implements OnInit {
  moviesList: IMovie[];
  currentPage = 1;
  totalPages: number;

  constructor(
    private movieDataService: MovieDataService,
    private activatedRoute: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    this.refreshMoviesList();
  }

  onPageChanged(newPage: number): void {
    this.currentPage = newPage;
    this.router.navigate(['movies'], { queryParams: {page: newPage}});
  }

  private refreshMoviesList(): void {
    this.activatedRoute.queryParams.pipe( 
      map((queryParams: Params) => {
        this.currentPage = +queryParams.page || 1;
        return this.currentPage}), 
      switchMap(page => this.movieDataService.getMoviesListResponse$(page))
    )
      .subscribe((moviesListResponse: IMoviesListResponse) => {
        this.moviesList = Helper.emptyPosterResolver(moviesListResponse.results);
        this.totalPages = moviesListResponse.total_pages;
      });
  }

}
