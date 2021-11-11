import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.css']
})
export class SearchElementComponent implements OnInit {
  @Input() movie: IMovie;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMovieClick() {
    // console.log('should redirect to ', this.movie.id)
    this.router.navigate(['movies', this.movie.id])
    
  }

}
