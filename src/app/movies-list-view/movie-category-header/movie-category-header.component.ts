import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-category-header',
  templateUrl: './movie-category-header.component.html',
  styleUrls: ['./movie-category-header.component.css']
})
export class MovieCategoryHeaderComponent {
  @Input() categoryHeader: string;
}
